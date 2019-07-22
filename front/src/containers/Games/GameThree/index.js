import React, { Component } from 'react'
import { connect } from 'react-redux'

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
  ModuleCard4,
  ModuleCard5,
  ModuleCard6,
  ModuleCard7,
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
  MobuleSubTitle,
  RulesItem,
  Exit,
  ButtonsArea,
  RoundTime,
  ModalOverLevel,
  BottomStats
} from './contentStyled.js'


export default class Game3 extends Component {
  constructor(props) {
    super(props) 


    this.state = {
      gameId: 3,
      gameLevel: 1,
      isStarted: false,
      isUserPlay: false,
      values: undefined,
      secretCards: true,
      randomCards: false,
      points: 0,
      try: 3,
      cardStatus: [ true, true, true, true, true, true, true, true, true, true, true, true, ],
      timerOn: false,
      seeCards: false,
      timeLeft: 20,      
    }
  }

  componentDidMount() {
    const Timer = () => {
      this.state.timerOn || this.state.seeCards ?
        this.setState({
          timeLeft: this.state.timeLeft - 1
        })
        : null
    }

    setInterval(Timer, 1000)

    
  }

  startGame = () => { 
    const sortRandom = () => {
      return Math.random() - 0.5
    }
    let allCards = data

    allCards.sort(sortRandom)

    let secretCards = [
      allCards[0],
      allCards[1],
      allCards[2],
      allCards[3],
      this.state.gameLevel >= 2 && allCards[4],
      this.state.gameLevel >= 3 && allCards[5],
      this.state.gameLevel >= 4 && allCards[6],
      this.state.gameLevel === 5 && allCards[7],
    ]
    console.log('SECRET', secretCards)

    if (this.state.randomCards === false) {
      const randomCards = () => {
        
        let nineCards = [
          this.state.gameLevel >= 2 ? false : allCards[4],
          this.state.gameLevel >= 3 ? false : allCards[5],
          this.state.gameLevel >= 4 ? false : allCards[6],
          this.state.gameLevel >= 5 ? false : allCards[7],
          allCards[8],
          this.state.gameLevel >= 3 && allCards[9],
          this.state.gameLevel >= 3 && allCards[10],
          this.state.gameLevel >= 3 && allCards[11]
        ]

        let fullCard = nineCards.concat(...secretCards)

        fullCard.sort(sortRandom)

        let nineCardsNew = fullCard.filter(item => item !== false)

        nineCardsNew.sort(sortRandom)

        console.log('FINAL', nineCardsNew)

        return nineCardsNew
        
      }

      this.setState({
        randomCards: randomCards(),
        secretCards: secretCards,
        values: data,
      })
    }
    

    let tryToCheck = this.state.gameLevel
    switch(tryToCheck) {
    case 1:
      tryToCheck = 4
      break
    case 2:
      tryToCheck = 5
      break
    case 3:
      tryToCheck = 6
      break
    case 4:
      tryToCheck = 7
      break
    case 5:
      tryToCheck = 8
      break
    default:
      tryToCheck = 4
      break
    }   
    let timeToPLay = this.state.gameLevel
    switch(timeToPLay) {
    case 1:
      timeToPLay = 20
      break
    case 2:
      timeToPLay = 19
      break
    case 3:
      timeToPLay = 18
      break
    case 4:
      timeToPLay = 17
      break
    case 5:
      timeToPLay = 16
      break
    default:
      timeToPLay = 20
      break
    }   
    let levelPoints = this.state.gameLevel
    switch(levelPoints) {
    case 1:
      levelPoints = -1
      break
    case 2:
      levelPoints = -2
      break
    case 3:
      levelPoints = -3
      break
    case 4:
      levelPoints = -4
      break
    case 5:
      levelPoints = -5
      break
    default:
      levelPoints = -1
    }  
    this.setState({
      points: levelPoints,
      isStarted: true,
      try: tryToCheck,
      timeLeft: timeToPLay,
      secretCards: secretCards,
    })
  }

  nextLevel = () => {
    let tryToCheck = this.state.gameLevel
    switch(tryToCheck) {
    case 1:
      tryToCheck = 4
      break
    case 2:
      tryToCheck = 5
      break
    case 3:
      tryToCheck = 6
      break
    case 4:
      tryToCheck = 7
      break
    case 5:
      tryToCheck = 8
      break
    default:
      tryToCheck = 3
      break
    }   
    let timeToPLay = this.state.gameLevel
    switch(timeToPLay) {
    case 1:
      timeToPLay = 10
      break
    case 2:
      timeToPLay = 13
      break
    case 3:
      timeToPLay = 16
      break
    case 4:
      timeToPLay = 19
      break
    case 5:
      timeToPLay = 21
      break
    default:
      timeToPLay = 10
      break
    }     
    this.setState({
      isStarted: false,
      isUserPlay: false,
      isOver: false,
      try: tryToCheck,
      timeLeft: timeToPLay,
      gameLevel: this.state.gameLevel + 1,
      points : 0,
      cardStatus: [ true, true, true, true, true, true, true, true, true, true, true, true, ],
      secretCards: this.secretCards,
      timerOn: false,
      seeCards: false,
      randomCards: false
    })  
  }

  checkCard(item, key) {
    const cardStatus = [ ...this.state.cardStatus ]

    cardStatus[key] = false

    if (item === this.state.secretCards[0] ||
        item === this.state.secretCards[1] ||
        item === this.state.secretCards[2] ||
        item === this.state.secretCards[3] ||
        item === this.state.secretCards[4] ||
        item === this.state.secretCards[5] || 
        item === this.state.secretCards[6]) {
      console.log('Правильно!')
      let audio = new Audio(sound)
      audio.play()
      
      this.setState({
        points: this.state.points + 1,
        try: this.state.try - 1,
        cardStatus: cardStatus
      })
    } else {
      this.setState({
        cardStatus: cardStatus,
        try: this.state.try - 1,
      })
    }
  }

  renderCard() {
    return this.state.randomCards.map((item, key) => {
      return (
        <ModuleCardSelect
          key = { key }
          style = { this.state.cardStatus[key] ? null : { opacity: '0.5' } }
          onClick = { () => { this.state.cardStatus[key] ? this.checkCard(item, key) : null } }
        >
          <ModuleCardFront></ModuleCardFront>
          <ModuleCardBack>{ item }</ModuleCardBack>
        </ModuleCardSelect>
      )
    })
  }
  
  isOver() {
    if (this.state.try === 0 || this.state.isOver === true || this.state.points >= 3 || this.state.timeLeft === 0) {
      this.state.timerOn ? this.setState({ timerOn: false, seeCards: false }) : null
      return (
        <ModalOverGame>
          {this.state.points === 3 ? <ModalOverLevel>
            <div>
              {this.state.gameLevel === 5 ?
                <ModalOverGameTitle>Поздравляем, Вы завершили игру<br/>"Цифры"</ModalOverGameTitle> :
                <ModalOverGameTitle>Уровень {this.state.gameLevel} пройден</ModalOverGameTitle>}
            </div>
            <ButtonsArea>
              {this.state.points >= 3 && this.state.gameLevel < 5 ?
                <ModalOverButton onClick={() => {this.nextLevel()}}>Уровень {this.state.gameLevel + 1}</ModalOverButton> :
                <ModalOverButton onClick={() => {this.props.toMenu()}}>На главную</ModalOverButton>}
            </ButtonsArea>
          </ModalOverLevel> :
            <ModalOverGameBlock>
              <div>
                <ModalOverGameTitle>Время или попытки закончились</ModalOverGameTitle>
                <ModalOverGameLabel>Время: { this.state.timeLeft }</ModalOverGameLabel>
                <ModalOverGameLabel>Счёт: { this.state.points <= 0 ? 0 : this.state.points}</ModalOverGameLabel>
                <ModalOverGameLabel>Попытки: { this.state.try }</ModalOverGameLabel>
              </div>
              <ButtonsArea>
                <ModalOverButton onClick={() => {this.props.toMenu()}}>На главную</ModalOverButton>
              </ButtonsArea>
            </ModalOverGameBlock>}
        </ModalOverGame>
      )
    }
  }


  isPlay() {
    if (this.state.isUserPlay) {
      let timeToPLay = this.state.gameLevel
      switch(timeToPLay) {
      case 1:
        timeToPLay = 10000
        break
      case 2:
        timeToPLay = 13000
        break
      case 3:
        timeToPLay = 16000
        break
      case 4:
        timeToPLay = 19000
        break
      case 5:
        timeToPLay = 22000
        break
      default:
        timeToPLay = 10000
        break
      }
      this.state.timerOn === true ? setTimeout(() => {
        this.state.isOver || this.state.timeLeft === 0 ? this.setState({ timerOn: false, isOver: true }) : null
      }, timeToPLay) : null
      console.log('Игра началась')
      return (
        <div>
          <ModuleCardsSelect>
            { this.renderCard() }
          </ModuleCardsSelect>
          <BottomStats>Попыток: { this.state.try }</BottomStats>
          <BottomStats>Ваш счёт: { this.state.points <= 0 ? 0 : this.state.points }</BottomStats>
          <BottomStats>Время: { this.state.timeLeft }</BottomStats>
        </div>
      )
    }
  }

  isStarted() {
    if (this.state.isUserPlay === false) {
      if (this.state.isStarted) {
        setTimeout(() => {this.setState({ isUserPlay: true, timerOn: true, seeCards: true })}, 20000)
        return (
          <div>
            <ModuleCards>
              <ModuleCard1>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[0] }</ModuleCardBack>
              </ModuleCard1>
              <ModuleCard1>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[1] }</ModuleCardBack>
              </ModuleCard1>
              <ModuleCard1>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[2] }</ModuleCardBack>
              </ModuleCard1>
              <ModuleCard1>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[3] }</ModuleCardBack>
              </ModuleCard1>
              {this.state.gameLevel >= 2 &&
                 <ModuleCard1>
                   <ModuleCardFront></ModuleCardFront>
                   <ModuleCardBack>{ this.state.secretCards[4] }</ModuleCardBack>
                 </ModuleCard1> }
              {this.state.gameLevel >= 3 && 
              <ModuleCard1>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[5] }</ModuleCardBack>
              </ModuleCard1> }
              {this.state.gameLevel === 4 &&
                 <ModuleCard1>
                   <ModuleCardFront></ModuleCardFront>
                   <ModuleCardBack>{ this.state.secretCards[6] }</ModuleCardBack>
                 </ModuleCard1>}
              {this.state.gameLevel === 5 &&
                 <ModuleCard1>
                   <ModuleCardFront></ModuleCardFront>
                   <ModuleCardBack>{ this.state.secretCards[7] }</ModuleCardBack>
                 </ModuleCard1>}
            </ModuleCards>
          </div>
        )
      } else {
        let gameLevel = this.state.gameLevel
        switch(gameLevel) {
        case 1:
          gameLevel= 'четырёх'
          break
        case 2:
          gameLevel= 'пяти'
          break
        case 3:
          gameLevel= 'шести'
          break
        case 4:
          gameLevel= 'семи'
          break
        case 5:
          gameLevel= 'восьми'
          break
        }
        return (
          <Module>
            <div>
              <MobuleSubTitle>Описание:</MobuleSubTitle>
              <RulesItem>Нужно запомнить цифры на {gameLevel} карточках.</RulesItem>
              <RulesItem>На запоминание цифр даётся <b>20 секунд.</b></RulesItem>
              <RulesItem>Потом нужно выбрать правильные цифры среди появившихся {this.state.gameLevel >= 3 ? 'двенадцати' : 'девяти'} карточек.</RulesItem>
            </div>
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
        <Exit><img src={exit} onClick={ () => this.props.toMainmenu() }/></Exit>
        <PageTitle>Игры</PageTitle>
        <Module>
          <ModuleTitle>Цифры {this.state.isUserPlay &&
             <RoundTime>{ this.state.timeLeft }</RoundTime>}
          <div>Уровень: {this.state.gameLevel}</div>
          </ModuleTitle>
          { this.isStarted() }
          { this.isPlay() }
          { this.isOver() }
        </Module>
      </PageWrapper>
    )
  }

}
