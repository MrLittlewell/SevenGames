import React, { Component } from 'react'
import { connect } from 'react-redux'

import sound from '../../../audio/correct.mp3'
import { data } from './data'
import exit from '../../../img/icons/exit.svg'

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
  ModuleCardsWords,
  Kit,
  KitKeyWorld,
  KitPart,
  KitListElement,
  MobuleSubTitle,
  RulesItem,
  Exit
} from './contentStyled.js'


export default class Game7 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameId: 7,
      isStarted: false,
      isUserPlay: false,
      data: data,
      secretCards: undefined,
      selectedCards: [],
      activeSign: [ [ true, true, true, true, true ], [ true, true, true, true, true ] ],
      try: 4,
      timerOn: false,
      timeLeft: 15,
      isOver: false,
    }
  }

  componentDidMount() {
    if (!this.state.secretCards === undefined) {return}

    // const data = [...this.state.data]  // Копия data файла
    const compareRandom = (a, b) => { return Math.random() - 0.5 }
    const secretCards = [] // Случайные ключевые карты для пользователя
    let randomSigns = [] // Набор случайных признаков

    // Выбор двух карт в secretCards и удаление их из data
    for (let i = 0; i < 2; i++) {
      let randomCarNumber = this.randomNumber(data.length) // 8-i - уменьшение диапазона выбора карты, т.к. выбранная карта удаляется в data

      secretCards[i] = [ ...data ][randomCarNumber] // Выбор случайной карты из data
      data.splice(randomCarNumber, 1)
    }

    // Создание набора случайных признаков из оставшихся карт
    data.map((item) => {
      randomSigns = randomSigns.concat(...item.signs)
    })
        
    // Выбор слов-признаков, которые останутся (от 2 до 4)
    for (let i = 0; i < 2; i++) {
      let amountSignsToDelete = this.getRandomInt(1, 3) // Количество слов-признаков, которые нужно удалить от 1 до 3
      let signs = secretCards[i].signs // Делаю копию признаков, чтобы не мутировать их

      secretCards[i].selectedSigns = [ ...signs ]
      for (let j = 0; j < amountSignsToDelete; j++) {
        let amountSigns = secretCards[i].selectedSigns.length
        let randomSignToDelete = this.randomNumber(amountSigns)

        secretCards[i].selectedSigns.splice(randomSignToDelete, 1)
      }
      // Дополнение выбранных слов-признаков случайными словами-признаками
      let selectedSigns = secretCards[i].selectedSigns

      secretCards[i].stuffSigns = [ ...selectedSigns ]
      for (let j = selectedSigns.length; j < 5; j++) {
        let randomStuffSign = this.randomNumber(randomSigns.length)

        secretCards[i].stuffSigns[j] = randomSigns[randomStuffSign]
      }
      // Перемешка массива выбранных слов со случайными
      secretCards[i].stuffSigns.sort(compareRandom)
      // Свойство для сохранения выбранных значений пользователем
      secretCards[i].userSelect = []
    }

    console.log(data)
    console.log(secretCards)
    console.log(randomSigns)

    this.setState({ secretCards: secretCards })
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

  isOver() {
    const secretCards = [ ...this.state.secretCards ]
    var points = 0
    var amountTrueSelected = 0
    var amountFalseSelected = 0
    var maxPoints = 0
    var bufferCounterErrors = 0
    var answers = []
    var userSelectPoints = [
      { points: 0, wrong: 0, isTrue: false }, { points: 0, wrong: 0, isTrue: false }
    ]

    secretCards.map((item, kitId) => {
      const trueSigns = item.selectedSigns
      const userSelect = item.userSelect
      
      answers = answers.concat(trueSigns)
      maxPoints = maxPoints + trueSigns.length
      trueSigns.map((trueItem, trueItemId) => {
        userSelect.map((userItem, userItemId) => {
          if (trueItem === userItem) { amountTrueSelected++ }
        })
      })
      userSelect.map((userItem) => {
        var counterWrongCompare = 0

        trueSigns.map((trueItem) => {
          if (!(userItem === trueItem)) { counterWrongCompare++ }
        })
        if (counterWrongCompare === trueSigns.length) { amountFalseSelected++ }
        counterWrongCompare = 0
      })
    })

    console.log(maxPoints, amountFalseSelected)

    if (answers.length === amountTrueSelected && amountFalseSelected === 0) {
      points = 3
    } else if (answers.length - 2 <= amountTrueSelected && amountFalseSelected === 0) {
      points = 2
    } else if (answers.length - 2 <= amountTrueSelected && amountFalseSelected !== 0) {
      points = 1
    } else if (answers.length - 2 > amountTrueSelected && amountFalseSelected !== 0) {
      points = 0
    } else {
      points = 0
    }

    console.log(userSelectPoints)

    return (
      <ModalOverGame>
        <ModalOverGameBlock>
          <div>
            <ModalOverGameTitle>Попытки закончились</ModalOverGameTitle>
            <ModalOverGameLabel>Счёт: { points }</ModalOverGameLabel>
          </div>
          <ModalOverButton onClick={() => {this.props.toMenu()}}>На главную</ModalOverButton>
        </ModalOverGameBlock>
      </ModalOverGame>
    )
  }

  SaveResult(points) {
    console.log(points)
    let data = {
      userId: this.props.data.userId,
      gameId: this.state.gameId,
      points: points,
    }

    // SaveResultApi(data)
    //   .then((response) => {
    //     console.log(response.data)
    //   })
  }

  selectSign(item, index, subIndex) {
    const activeSign = [ ...this.state.activeSign ]
    const secretCards = [ ...this.state.secretCards ]

    secretCards[index].userSelect.push(item)
    activeSign[index][subIndex] = false
    this.setState({ activeSign: activeSign })
  }

  renderCardsWords() {
    const kits = this.state.secretCards
    console.log(kits)
    const kitsListSigns = (signs, index) => {
      return signs.map((item, subIndex) => {
        return (
          <KitListElement
            key = { subIndex }
            style = { this.state.activeSign[index][subIndex] ? null : { color: '#3e3e3e' } }
            state = { () => {
              if (this.state.activeSign[index][subIndex] === false) {
                let stateSign = false

                console.log(kits[index].selectedSigns.length)
                for (let i = 0; i < kits[index].selectedSigns.length; i++) {
                  console.log(item, kits[index].selectedSigns[i])
                  if (item === kits[index].selectedSigns[i]) { stateSign = true }
                }
                if (stateSign) { return `#589500` } else { return `#dc4c4c` }
              }
            } }
            onClick = { () => { this.state.activeSign[index][subIndex] ? this.selectSign(item, index, subIndex) : null } }
          >{ item }</KitListElement>
        )
      })
    }
    const renderKit = () => {
      return kits.map((kit, index) => {
        return (
          <Kit key = { index }>
            <KitKeyWorld>
              { kit.word }
            </KitKeyWorld>
            <KitPart>
              { kitsListSigns(kit.stuffSigns, index) }
            </KitPart>
          </Kit>
        )
      })
    }

    return (
      <ModuleCards>
        { renderKit() }
      </ModuleCards>
    )
  }

  isStarted() {
    if (this.state.isOver === false) {
      if (this.state.isStarted) {
        setTimeout(() => {this.setState({ isOver: true })}, 20000)
        return (
          <div>
            { this.renderCardsWords() }
            <Timer />
            <ModuleButtonRun to = "#" onClick = { () => this.setState({ isOver: true }) } >Готово!</ModuleButtonRun>
          </div>
        )
      } else {
        return (
          <Module>
            <MobuleSubTitle>Описание:</MobuleSubTitle>
            <RulesItem>Выберите лишнее слово в каждом ряду.</RulesItem>
            <RulesItem>У вас будет 20 секунд.</RulesItem>
            <CenterWrapper>
              <ModuleButtonRun to = "#" onClick = { () => this.startGame() } >Старт</ModuleButtonRun>
            </CenterWrapper>
          </Module>
        )
      }
    }
  }

  render() {
    return (
      <PageWrapper>
        <Exit><img src={exit} onClick={() => {this.props.toMainmenu()}}/></Exit>
        <PageTitle>Игры</PageTitle>
        <Module>
          <ModuleTitle>Выделение существенных признаков</ModuleTitle>
          { this.isStarted() }
          { this.state.isOver === true ? this.isOver() : null }
        </Module>
      </PageWrapper>
    )
  }
}