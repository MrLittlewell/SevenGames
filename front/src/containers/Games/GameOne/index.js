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
  RoundTime
} from './contentStyled.js'


export default class Game1 extends Component {
  constructor(props) {
    super(props) 


    this.state = {
      gameId: 2,
      gameLevel: 1,
      isStarted: false,
      isUserPlay: false,
      values: undefined,
      secretCards: undefined,
      randomCards: true,
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
    
    const secretCards = [
      data[this.randomNumber(data.length)],
      data[this.randomNumber(data.length)],
      data[this.randomNumber(data.length)],
      this.state.gameLevel >= 2 && data[this.randomNumber(data.length)],
      this.state.gameLevel >= 3 && data[this.randomNumber(data.length)],
      this.state.gameLevel >= 4 && data[this.randomNumber(data.length)],
      this.state.gameLevel === 5 && data[this.randomNumber(data.length)],
    ]

    console.log(data, secretCards)
    if (this.state.randomCards === true) {
      const randomCards = () => {
        const sortRandom = (data, secretCards) => {
          return Math.random() - 0.5
        }
        var nineCards = [ ...secretCards ]
        var allCards = [ ...data ]
      
        allCards = allCards.concat(data[0]).concat(data[1]).concat(data[2]).concat(data[3]).concat(data[4]).concat(data[5]).concat(data[6])
      
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
          levelCards = 6
          break
        case 2:
          levelCards = 5
          break
        case 3:
          levelCards = 4
          break
        case 4:
          levelCards = 6
          break
        case 5:
          levelCards = 5
          break
        default:
          levelCards = 6
          break
        }

        console.log(levelCards)
        for (let i = 0; i < levelCards; i++) {
          let random = Math.floor(Math.random(allCards.length) * allCards.length)
          nineCards.push(allCards[random])
        }
      
        nineCards.sort(sortRandom)
        
        let nineCardsNew = nineCards.filter(item => item !== false)
        
        return nineCardsNew
      }
      
      
      this.setState({
        randomCards: randomCards(),
        secretCards: secretCards,
        values: data,
      })
    }
        
  }


  randomNumber(number) {
    return (
      Math.floor(Math.random(number) * number)
    )
  }

  startGame = () => { 
    let tryToCheck = this.state.gameLevel

    switch(tryToCheck) {
    case 1:
      tryToCheck = 3
      break
    case 2:
      tryToCheck = 4
      break
    case 3:
      tryToCheck = 5
      break
    case 4:
      tryToCheck = 6
      break
    case 5:
      tryToCheck = 7
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
      isStarted: true,
      try: tryToCheck,
      timeLeft: timeToPLay,
      
    })
    console.log(this.state.try, this.state.timeLeft)
  }

  nextLevel = () => {
    let tryToCheck = this.state.gameLevel

    switch(tryToCheck) {
    case 1:
      tryToCheck = 3
      break
    case 2:
      tryToCheck = 4
      break
    case 3:
      tryToCheck = 5
      break
    case 4:
      tryToCheck = 6
      break
    case 5:
      tryToCheck = 7
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
      secretCards: undefined,
      timerOn: false,
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
    if (this.state.try === 0 || this.state.isOver === true) {
      // this.state.timerOn === 0 ? this.setState({ timerOn: false }) : null
      return (
        <ModalOverGame>
          {this.state.points === 3 ? <ModalOverGameBlock>
            <div>
              <ModalOverGameTitle>Уровень пройден</ModalOverGameTitle>
              <ModalOverGameLabel>Счёт: { this.state.points }</ModalOverGameLabel>
            </div>
            <ButtonsArea>
              {this.state.points >= 3 && this.state.gameLevel <= 5 ? <ModalOverButton onClick={() => {this.nextLevel()}}>Новый уровень!</ModalOverButton> : ''}
            </ButtonsArea>
          </ModalOverGameBlock> :
            <ModalOverGameBlock>
              <div>
                <ModalOverGameTitle>Время или попытки закончились</ModalOverGameTitle>
                <ModalOverGameLabel>Время: { this.state.timeLeft }</ModalOverGameLabel>
                <ModalOverGameLabel>Счёт: { this.state.points }</ModalOverGameLabel>
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
        !this.state.isOver ? this.setState({ timerOn: false, isOver: true }) : null
      }, timeToPLay) : null
      console.log('Игра началась')
      return (
        <div>
          <ModuleCardsSelect>
            { this.renderCard() }
          </ModuleCardsSelect>
          <div>Попыток: { this.state.try }</div>
          <div>Ваш счёт: { this.state.points }</div>
          <div>Время: { this.state.timeLeft }</div>
        </div>
      )
    }
  }

  isStarted() {
    if (this.state.isUserPlay === false) {
      
      let timeToPLay = this.state.gameLevel
      switch(timeToPLay) {
      case 1:
        timeToPLay = 10000
        break
      case 2:
        timeToPLay = 13000
        break
      case 3:
        timeToPLay = 17000
        break
      case 4:
        timeToPLay = 21000
        break
      case 5:
        timeToPLay = 24000
        break
      default:
        timeToPLay = 10000
        break
      }     
      if (this.state.isStarted) {
        setTimeout(() => {this.setState({ isUserPlay: true, timerOn: true, })}, timeToPLay)
        return (
          <div>
            <ModuleCards>
              <ModuleCard1>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[0] }</ModuleCardBack>
              </ModuleCard1>
              <ModuleCard2>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[1] }</ModuleCardBack>
              </ModuleCard2>
              <ModuleCard3>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[2] }</ModuleCardBack>
              </ModuleCard3>
              {this.state.gameLevel >= 2 &&
                 <ModuleCard4>
                   <ModuleCardFront></ModuleCardFront>
                   <ModuleCardBack>{ this.state.secretCards[3] }</ModuleCardBack>
                 </ModuleCard4>}
              {this.state.gameLevel >= 3 &&
                 <ModuleCard5>
                   <ModuleCardFront></ModuleCardFront>
                   <ModuleCardBack>{ this.state.secretCards[4] }</ModuleCardBack>
                 </ModuleCard5> }
              {this.state.gameLevel >= 4 && 
              <ModuleCard6>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[5] }</ModuleCardBack>
              </ModuleCard6> }
              {this.state.gameLevel === 5 &&
                 <ModuleCard7>
                   <ModuleCardFront></ModuleCardFront>
                   <ModuleCardBack>{ this.state.secretCards[6] }</ModuleCardBack>
                 </ModuleCard7>}
            </ModuleCards>
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
          <ModuleTitle>Три слова {this.state.isUserPlay && <RoundTime>{ this.state.timeLeft }</RoundTime>}<div></div></ModuleTitle>
          { this.isStarted() }
          { this.isPlay() }
          { this.isOver() }
        </Module>
      </PageWrapper>
    )
  }

}
