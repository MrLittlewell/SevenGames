import React, { Component } from 'react'
import { connect } from 'react-redux'

import sound from '../../../audio/correct.mp3'

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
  ModuleCardNumber,
  CardInputWrapper,
  CardInput,
  CompleteGame,
  MobuleSubTitle,
  RulesItem
} from './contentStyled.js'


export default class Game1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameId: 1,
      isStarted: false,
      isUserPlay: false,
      secretCards: [
        this.randomNumber(),
        this.randomNumber(),
        this.randomNumber()
      ],
      inputsValue: [ '', '', '' ],
      points: 0,
      isOver: false,
      cardStatus: [false, false, false],
      timerOn: false,
      timeLeft: 20,
    }
  }

  componentWillMount() {
    const Timer = () => {
      (this.state.timerOn) ? (
        this.setState({
          timeLeft: this.state.timeLeft - 1
        })
      ) : null
    }

    setInterval(Timer, 1000)
  }

  randomNumber() {
    return (
      Math.floor(Math.random(99) * 99)
    )
  }

  startGame() {      
    this.setState({
      isStarted: true
    })
  }

  updateInputValueCards(e, indexInput) {
    const inputsValue = this.state.inputsValue
    const valueToUpdate = e.target.value

    if (Number(valueToUpdate) === this.state.secretCards[indexInput]) {
      var audio = new Audio(sound)
      
      audio.play()
    }

    inputsValue[indexInput] = Number(valueToUpdate)
    this.setState({ inputsValue: inputsValue })
  }

  checkInputValues() {
    const inputsValue = this.state.inputsValue
    const secretCardsCopy = [...this.state.secretCards]
    const secretCards = [...this.state.secretCards]
    var points = 0
    var cardsTrue = 0
    var inLine = false
    var secretToDelete = null

    if (
      inputsValue[0] === secretCards[0] &&
      inputsValue[1] === secretCards[1] &&
      inputsValue[2] === secretCards[2] &&
      inputsValue[3] === secretCards[3] &&
      inputsValue[4] === secretCards[4] &&
      inputsValue[5] === secretCards[5]
    ) {
      points = 3
      inLine = true
    } else {
      inputsValue.map((inputItem) => {
        var secretToDelete = null
        console.log(secretCards)

        secretCards.map((secretItem, secretIndex) => {
          if (inputItem === secretItem) {
            console.log(inputItem, secretItem)
            cardsTrue++
            secretToDelete = secretIndex
          }
        })
        if (secretToDelete !== null) { secretCardsCopy.splice(secretToDelete, 1) }
        console.log(secretCardsCopy)
      })

      if (cardsTrue === 5 || cardsTrue === 6) {
        points = 2
      } else if (cardsTrue === 4) {
        cardsTrue = 0
        console.log(secretCardsCopy)
        for (let i = 0; i < 6; i++) {
          if (inputsValue[i] === secretCards[i]) { cardsTrue++ }
        }
        if (cardsTrue === 4) {
          points = 2
        } else {
          points = 1
        }
      } else if (cardsTrue < 4 && cardsTrue > 0) {
        points = 1
      } else {
        points = 0
      }
    }

    this.setState({
      isOver: true,
      points: points
    })
  }

  renderCard() {
    return (
      this.state.secretCards.map((item, index) => {
        return (
          <CardInputWrapper key = { index }>
            <CardInput
              placeholder = 'Введите слово'
              onChange = { (e) => { this.updateInputValueCards(e, index) } }
              cardState = { () => {
                if (this.state.secretCards[index] === this.state.inputsValue[index]) {
                  return `#589500`
                } else {
                  return `#dc4c4c`
                }
              }}
            ></CardInput>
          </CardInputWrapper>
        )
      })
    )
  }
  
  isOver() {
    if (this.state.isOver) {
      (this.state.timerOn) ? ( this.setState({ timerOn: false }) ) : null

      return (
        <ModalOverGame>
          <ModalOverGameBlock>
            <ModalOverGameTitle>Время закончилось</ModalOverGameTitle>
            <ModalOverGameLabel>Время: { this.state.timeLeft }</ModalOverGameLabel>
            <ModalOverGameLabel>Счёт: { this.state.points }</ModalOverGameLabel>
            { this.props.data.auth === false ? (
              <ModalOverButton to = '/games'>На главную</ModalOverButton>
            ) : (
              <ModalOverButton to = '/stats' onClick = { () => { this.SaveResult() } }>Сохранить</ModalOverButton>
            ) }
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
      (this.state.timerOn) ? (setTimeout(() => {
        (!this.state.isOver) ? ( this.setState({ timerOn: false, isOver: true }) ) : null
      }, 40000)) : null

      console.log('Игра началась')
      return (
        <div>
          <ModuleCardsSelect>
            { this.renderCard() }
          </ModuleCardsSelect>
          <div>Ваш счёт: { this.state.points }</div>
          <div>Время: { this.state.timeLeft }</div>
          <TimerLeft />
          <CompleteGame onClick = { () => this.checkInputValues() } >Завершить</CompleteGame>
        </div>
      )
    }
  }

  renderSecretCards() {
    const secretCards = this.state.secretCards

    return secretCards.map((item, index) => {
      return (
        <ModuleCardNumber key = { index }>
          <ModuleCardFront></ModuleCardFront>
          <ModuleCardBack>{ item }</ModuleCardBack>
        </ModuleCardNumber>
      )
    })
  }

  isStarted() {
    if (this.state.isUserPlay === false) {
      if (this.state.isStarted) {
        setTimeout(() => {this.setState({ isUserPlay: true, timerOn: true })}, 12000)
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
            <RulesItem>Нужно запомнить слова на трёх карточках.</RulesItem>
            <RulesItem>На запоминание слова даётся 3 секунды.</RulesItem>
            <RulesItem>Потом нужно выбрать правильные слова среди появившихся девяти карточек.</RulesItem>
            <CenterWrapper>
              <ModuleButtonRun to = '#' onClick = { () => this.startGame() } >Старт</ModuleButtonRun>
            </CenterWrapper>
          </Module>
        )
      }
    }
  }

  render() {
    console.log(this.state.secretCards, 'рендер')
    return (
      <PageWrapper>
        <PageTitle>Игры</PageTitle>
        <Module>
          <ModuleTitle>Три слово</ModuleTitle>
          { this.isStarted() }
          { this.isPlay() }
          { this.isOver() }
        </Module>
      </PageWrapper>
    )
  }
}