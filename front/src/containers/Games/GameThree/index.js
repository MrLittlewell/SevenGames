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
      timeLeft: 10,      
    }
  }

  componentDidMount() {
    const Timer = () => {
      this.state.timerOn ? 
        this.setState({
          timeLeft: this.state.timeLeft - 1
        })
        : null
    }

    setInterval(Timer, 1000)

    
  }


  randomNumber = () => {
    var copy = data.slice(0)
    if (copy.length < 1) { copy = data.slice(0) }
    let index = Math.floor(Math.random() * copy.length)
    let item = copy[index]
    copy.splice(index, 1)
    return( 
      item
    )
  }

  startGame = () => { 

    const secretCards = [
      this.randomNumber(data),
      this.randomNumber(data),
      this.randomNumber(data),
      this.randomNumber(data),
      // data[this.randomNumber(data)],
      // data[this.randomNumber(data)],
      this.state.gameLevel >= 2 && this.randomNumber(data),
      this.state.gameLevel >= 3 && this.randomNumber(data),
      this.state.gameLevel >= 4 && this.randomNumber(data),
      this.state.gameLevel === 5 && this.randomNumber(data),
    ]

    if (this.state.randomCards === false) {
      const randomCards = () => {
        const sortRandom = () => {
          return Math.random() - 0.5
        }
        let nineCards = [ ...secretCards ]
        let allCards = data

        allCards = allCards.concat(secretCards)
            
        nineCards.map((item) => {
          for (let i = 0; i <= allCards.length; i++) {
            if (allCards[i] === item) {
              allCards.splice(i, 1)
            }
          }
        })
        
        let levelCards = this.state.gameLevel
        switch(levelCards)
        {
        case 1:
          levelCards = 5
          break
        case 2:
          levelCards = 4
          break
        case 3:
          levelCards = 6
          break
        case 4:
          levelCards = 5
          break
        case 5:
          levelCards = 4
          break
        default:
          levelCards = 5
          break
        }
        for (let i = 0; i < levelCards; i++) {
          let random = Math.floor(Math.random() * allCards.length)
          nineCards.push(allCards[random])
        }
        
        let nineCardsNew = nineCards.filter(item => item !== false)
        console.log(nineCardsNew)

        nineCardsNew.sort(sortRandom)
        return nineCardsNew
      }
      this.setState({
        randomCards: randomCards(),
        secretCards: secretCards,
        values: data,
      })
    }
    
    console.log(secretCards)

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
    let currentPoints = this.state.points
    switch(levelPoints) {
    case 1:
      levelPoints = currentPoints
      break
    case 2:
      levelPoints = -1
      break
    case 3:
      levelPoints = -2
      break
    case 4:
      levelPoints = -3
      break
    case 5:
      levelPoints = -4
      break
    default:
      levelPoints = currentPoints
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
    if (this.state.try === 0 || this.state.isOver === true || this.state.points >= 3) {
      this.state.timerOn ? this.setState({ timerOn: false }) : null
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

  // SaveResult() {
  //   let data = {
  //     userId: this.props.data.userId,
  //     gameId: this.state.gameId,
  //     points: this.state.points,
  //   }

  //   SaveResultApi(data)
  //     .then((response) => {
  //       console.log(response.data)
  //     })
  // }

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
        setTimeout(() => {this.setState({ isUserPlay: true, timerOn: true, })}, 20000)
        return (
          <div>
            <RoundTime>{ this.state.isStarted }</RoundTime>

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
          </div>
        )
      } else {
        return (
          <Module>
            <div>
              <MobuleSubTitle>Описание:</MobuleSubTitle>
              <RulesItem>Нужно запомнить слова на трёх карточках.</RulesItem>
              <RulesItem>На запоминание слова даётся 3 секунды.</RulesItem>
              <RulesItem>Потом нужно выбрать правильные слова среди появившихся {this.state.gameLevel >= 4 ? 'двенадцати' : 'девяти'} карточек.</RulesItem>
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
          <ModuleTitle>Слова {this.state.isUserPlay &&
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
