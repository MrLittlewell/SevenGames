import React, { Component } from 'react'

import sound from '../../../audio/correct.mp3'
import exit from '../../../img/icons/exit.svg'
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
  ModuleCardsWords,
  MobuleSubTitle,
  RulesItem,
  Exit
} from './contentStyled.js'


export default class Game6 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameId: 6,
      isStarted: false,
      isUserPlay: false,
      data: data,
      secretCards: false,
      selectedCards: [],
      activeLine: [ true, true, true, true, true ],
      activeRow: [ [ true, true, true, true, true ], [ true, true, true, true, true ], [ true, true, true, true, true ], [ true, true, true, true, true ], [ true, true, true, true, true ] ],
      try: 4,
      timerOn: false,
      timeLeft: 20,
      isOver: false,
    }
  }

  componentDidMount() {
    const data = [ ...this.state.data ]
    const secretCards = []
    const randomNumber = (length) => {
      return (
        Math.floor(Math.random(length) * length)  
      )
    }
    if (!this.state.secretCards === undefined) {return null}
    for (let i = 0; i < 4; i++) {
      let index = randomNumber(data.length)

      secretCards[i] = data[index]
      data.splice(index, 1)
    }
    console.log(secretCards)
    this.setState({
      secretCards: secretCards
    })

    const Timer = () => {
      this.state.timerOn ? 
        this.setState({
          timeLeft: this.state.timeLeft - 1
        })
        : null
    }

    setInterval(Timer, 1000)
  }

  randomNumber() {
    return (
      Math.floor(Math.random(15) * 15)
    )
  }

  startGame() {      
    this.setState({
      isStarted: true,
      timerOn: true
    })
  }

  checkCard(item, key) {

  }

  isOver() {
    const secretCards = this.state.secretCards
    const selectedCards = this.state.selectedCards
    const trueCards = []
    var points = 0
    var cardPoints = 0

    secretCards.map((item, key) => {
      trueCards[key] = item.true
      item.true === selectedCards[key] ? cardPoints++ : null
    })
    switch(cardPoints) {
    case 4: points = 3
      break
    case 3, 2: points = 2
      break
    case 1: points = 1
      break
    case 0: points = 0
      break
    }

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

  deleteCard(index, subIndex, word) {
    const activeRow = [ ...this.state.activeRow ]
    const activeLine = [ ...this.state.activeLine ]
    const selectedCards = [ ...this.state.selectedCards ]

    activeLine[index] = false
    activeRow[index][subIndex] = false
    selectedCards[index] = word
    this.setState({
      activeLine: activeLine,
      activeRow: activeRow,
      selectedCards: selectedCards
    })
  }


  renderCardsWords() {
    const secretCards = this.state.secretCards
    const renderElements = (item, index) => {
      return item.words.map((word, subIndex) => {
        console.log(item.true)
        return (
          <ModuleCardsWords
            key = { subIndex }
            style = { !this.state.activeRow[index][subIndex] ? { backgroundColor: '#69b02e' } : null }
            onClick = { this.state.activeLine[index] ? () => { this.deleteCard(index, subIndex, word) } : null }
          >{ word }</ModuleCardsWords>
        )
      })
    }

    return secretCards.map((item, index) => {
      return (
        <ModuleCards key = { index }>
          { renderElements(item, index) }
        </ModuleCards>
      )
    })
  }

  isStarted() {
    if (this.state.isOver === false) {
      if (this.state.isStarted) {
        setTimeout(() => {this.setState({ isOver: true })}, 20000)
        return (
          <div>
            { this.renderCardsWords() }
            <div>Время: { this.state.timeLeft }</div>
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
    // console.log(this.state.secretCards, 'рендер')
    return (
      <PageWrapper>
        <Exit><img src={exit} onClick={() => {this.props.toMainmenu()}}/></Exit>
        <PageTitle>Игры</PageTitle>
        <Module>
          <ModuleTitle>Исключи лишнее</ModuleTitle>
          { this.isStarted() }
          { this.state.isOver === true ? this.isOver() : null }
        </Module>
      </PageWrapper>
    )
  }
}