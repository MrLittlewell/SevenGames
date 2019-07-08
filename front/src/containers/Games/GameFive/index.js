import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc'

import { data } from './data'
import {
  PageWrapper,
  PageTitle,
  Module,
  ModuleTitle,
  ModuleCards,
  ModuleCard,
  ModuleCardFront,
  ModuleCardBack,
  ModuleCard1,
  ModuleCard2,
  ModuleCard3,
  ModuleButtonRun,
  Timer,
  TimerLeft,
  ModuleCardSelect,
  CenterWrapper,
  ModuleCardsSelect,
  ModalOverGame,
  ModalOverGameBlock,
  ModalOverGameTitle,
  ModalOverGameLabel,
  ModalOverButton,
  ModuleCardDND,
  ModuleCardDNDInner,
  ModuleCardsSkip,
  ShowPoints,
  MobuleSubTitle,
  RulesItem
} from './contentStyled.js'

export default class Game5 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameId: 5,
      data: [...data],
      isStarted: false,
      isUserPlay: false,
      secretCards: [ ],
      sortSecretCards: [ ],
      points: 0,
      cardStatus: [false, false, false, false, false, false],
      timerOn: false,
      isShow: false,
      isOver: false,
    }
  }

  componentDidMount() {
    GetGameData(this.state.gameId)
      .then((response) => {
        console.log(response.data[0].data)
        const data = JSON.parse(response.data[0].data)

        if (!this.state.secretCards === undefined) return

        var sortSecretCards = []
        // const data = [...this.state.data]
        const secretCards = []
        const compareRandom = (a, b) => { return Math.random() - 0.5 }

        for (let i = 0; i < 6; i++) {
          let randomCardNumber = this.randomNumber(data.length) // data.length - i = bug; See later

          secretCards[i] = [...data][randomCardNumber]
          // console.log(randomCardNumber, 'Original log', data.length, i)
          secretCards[i].state = this.randomNumber(4)
          data.splice(randomCardNumber, 1)
        }
        sortSecretCards = JSON.parse(JSON.stringify(secretCards))
        // Сортировка по алфавиту
        sortSecretCards.sort(function(a, b) {
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        })
        for (let i = 0; i < 6; i++) {
          secretCards[i].state = 0
          secretCards[i].state = this.randomNumber(4)
          sortSecretCards[i].trueState = this.randomNumber(4)
          console.log(sortSecretCards[i], 'истинный', secretCards[i])
        }
        console.log(secretCards, 'secretCards')
        console.log(sortSecretCards, 'sortSecretCards')
        this.setState({
          secretCards: [...secretCards],
          sortSecretCards: [...sortSecretCards]
        })
    })
  }

  randomNumber(number) {
    return Math.floor(Math.random(number) * number)
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  startGame() {      
    this.setState({
      isStarted: true
    })
  }

  createLinkImg(nameImg) {
    const link = srcImg + '/img/game5_img/' + nameImg + '.png'

    return link
  }

  checkCard() {
    const secretCards = [...this.state.secretCards]
    const sortSecretCards = [...this.state.sortSecretCards]
    var points = 0
    console.log(secretCards, sortSecretCards)
    var trueAnswers = 0

    for (let i = 0; i < 6; i++) {
      if (secretCards[i].name === sortSecretCards[i].name) {
        console.log(secretCards, sortSecretCards, i)
        if (secretCards[i].state === sortSecretCards[i].state) {
          console.log('Состояние совпадает')
          trueAnswers++
        }
      }
    }
    console.log(trueAnswers)
    switch(trueAnswers) {
      case 6: points = 3; break;
      case 5: points = 3; break;
      case 4: points = 2; break;
      case 3: points = 2; break;
      case 2: points = 1; break;
      case 1: points = 1; break;
      case 0: points = 0; break;
    }
    console.log(trueAnswers)
    this.setState({
      isOver: true,
      points: points
    })
  }

  renderCard(item, index) {
    const SortableItem = SortableElement(({item, index, indexCopy}) => (
        <ModuleCardDND>
          <ModuleCardDNDInner
            src = { this.createLinkImg(item.src) }
            isState = { () => {
              if ((this.state.sortSecretCards[indexCopy].name === item.name) && (this.state.sortSecretCards[indexCopy].state === item.state)) {
                return `#589500`
              } else {
                return `#dc4c4c`
              }
            } }
            state = { () => {
              if (item.state === 0) {
                return `scale(1, 1) rotate(0deg)`
              } else if (item.state === 1) {
                return `scale(1, 1) rotate(90deg)`
              } else if (item.state === 2) {
                return `scale(-1, 1) rotate(0deg)`
              } else if (item.state === 3) {
                return `scale(1, 1) rotate(-90deg)`
              }
            } }
          >

          </ModuleCardDNDInner>
        </ModuleCardDND>
      )
    )
    return <SortableItem key = { `item-${index}` } index = { index } item = { item } indexCopy = { index } />
  }
  
  isOver() {
    if (this.state.try === 0) {
      (this.state.timerOn) ? ( this.setState({ timerOn: false }) ) : null

      return (
        <ModalOverGame>
          <ModalOverGameBlock>
            <ModalOverGameTitle>Попытки закончились</ModalOverGameTitle>
            <ModalOverGameLabel>Время: { this.state.timeLeft }</ModalOverGameLabel>
            <ModalOverGameLabel>Счёт: { this.state.points }</ModalOverGameLabel>
            <ModalOverButton to = '/stats' onClick = { () => { this.SaveResult() } }>Сохранить</ModalOverButton>
          </ModalOverGameBlock>
        </ModalOverGame>
      )
    }
  }

  SaveResult() {
    let data = {
      userId: this.props.data.userId,
      gameId: this.state.gameId,
      points: this.state.points,
    }

    SaveResultApi(data)
      .then((response) => {
        console.log(response.data)
      })
  }

  isPlay() {
    if (this.state.isUserPlay) {
      (this.state.timerOn) ? (setTimeout(() => { this.setState({ timerOn: false }) }, 10000)) : null
      const overButtons = () => {
        if (!this.state.isOver) {
          return <ModuleButtonRun to = '#' onClick = { () => this.checkCard() } >Готово!</ModuleButtonRun>
        } else if (this.props.data.auth === false) {
          return <ModalOverButton to = '/games'>На главную</ModalOverButton>
        } else {
          return <ModalOverButton to = '/stats' onClick = { () => { this.SaveResult() } }>Сохранить</ModalOverButton>
        }
      }
      const SortableList = SortableContainer(({items}) => {
        return (
          <ModuleCardsSkip
            isShow = { this.state.isShow ? 'animation: inherit' : 'animation: ${skip} 11s ease-in-out forwards;' }
          >
            {items.map((value, index) => (
              this.renderCard(value, index)
            ))}
            {
              overButtons()
            }
            {/* { !this.state.isOver ? (
              <ModuleButtonRun to = '#' onClick = { () => this.checkCard() } >Готово!</ModuleButtonRun>
            ) : <ModuleButtonRun to = '/stats' onClick = { () => this.SaveResult() } >Сохранить</ModuleButtonRun> } */}
          </ModuleCardsSkip>
        )
      })

      const onSortEnd = ({oldIndex, newIndex}) => {
        const secretCards = [...this.state.secretCards]
        
        if (this.state.isOver) return
        if (oldIndex === newIndex) {
          if (secretCards[oldIndex].state === 3) {
            secretCards[oldIndex].state = 0
          } else {
            secretCards[oldIndex].state = secretCards[oldIndex].state + 1
          }
        }
        this.setState(() => ({
          secretCards: arrayMove(secretCards, oldIndex, newIndex),
          isShow: true
        }));
      }

      return (
        <div>
          <SortableList items={ this.state.secretCards } onSortEnd={ onSortEnd } axis = 'xy' />
          { this.state.isOver ? (
            <ShowPoints>{ this.state.points }</ShowPoints>
          ) : null }
          {/* <TimerLeft /> */}
        </div>
      )
    }
  }

  renderSecretCards() {
    const sortSecretCards = [...this.state.sortSecretCards]

    return sortSecretCards.map((item, index) => {
      return (
        <ModuleCard key = { index }>
          <ModuleCardFront></ModuleCardFront>
          <ModuleCardBack
            state = { () => {
              if (item.state === 0) {
                return `scale(1, 1) rotate(0deg)`
              } else if (item.state === 1) {
                return `scale(1, 1) rotate(90deg)`
              } else if (item.state === 2) {
                return `scale(-1, 1) rotate(0deg)`
              } else if (item.state === 3) {
                return `scale(1, 1) rotate(-90deg)`
              }
            } }
            src = { this.createLinkImg(item.src) } ></ModuleCardBack>
        </ModuleCard>
      )
    })
  }

  isStarted() {
    if (this.state.isUserPlay === false) {
      if (this.state.isStarted) {
        const data = this.state.secretCards

        setTimeout(() => {this.setState({ isUserPlay: true, timerOn: true })}, 11000)
        return (
          <div>
            <ModuleCards>
              { this.renderSecretCards() }
            </ModuleCards>
            <Timer />
          </div>
        )
      } else {
        return (
          <Module>
            <MobuleSubTitle>Описание:</MobuleSubTitle>
            <RulesItem>Запомнить порядок картинок и в каком направлении смотрит существо.</RulesItem>
            <RulesItem>На запоминание картинок даётся 10 секунд.</RulesItem>
            <RulesItem>Далее нужно расставить картинки в правильном порядке(подсказка - в алфавитном порядке) и указать правильное направление головы существа.</RulesItem>
            <RulesItem>Чтобы повернуть картинку - кликните по ней. Чтобы переместить - перенесите мышкой.</RulesItem>
            <RulesItem>Ограничения по времени нету.</RulesItem>
            <CenterWrapper>
              <ModuleButtonRun to = '#' onClick = { () => this.startGame() } >Старт</ModuleButtonRun>
            </CenterWrapper>
          </Module>
        )
      }
    }
  }

  render() {
    return (
      <PageWrapper>
        <PageTitle>Игры</PageTitle>
        <Module>
          <ModuleTitle>Запомнить и воспроизвести</ModuleTitle>
          { this.isStarted() }
          { this.isPlay() }
          { this.isOver() }
        </Module>
      </PageWrapper>
    )
  }
}