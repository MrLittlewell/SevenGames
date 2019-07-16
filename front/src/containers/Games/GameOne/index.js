import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
  MobuleSubTitle,
  RulesItem,
  Exit,
  ButtonsArea
} from './contentStyled.js'


export default class Game1 extends Component {
  constructor(props) {
    super(props) 


    this.state = {
      gameId: 1,
      gameLevel: 1,
      isStarted: false,
      isUserPlay: false,
      values: undefined,
      secretCards: undefined,
      randomCards: true,
      points: 0,
      try: 3,
      cardStatus: [ true, true, true, true, true, true, true, true, true, ],
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
      this.state.gameLevel === 2 && data[this.randomNumber(data.length)],
      this.state.gameLevel === 3 && data[this.randomNumber(data.length)],
      this.state.gameLevel === 4 && data[this.randomNumber(data.length)],
      this.state.gameLevel === 5 && data[this.randomNumber(data.length)],
    ]

    console.log(data, secretCards)
    if (this.state.randomCards === true) {
      const randomCards = () => {
        const sortRandom = (a, b) => {
          return Math.random() - 0.5
        }
        var nineCards = [ ...secretCards ]
        var allCards = [ ...data ]
      
        allCards = allCards.concat(data[0]).concat(data[1]).concat(data[2])
      
        nineCards.map((item) => {
          for (let i = 0; i <= allCards.length; i++) {
            if (allCards[i] === item) {
              allCards.splice(i, 1)
            }
          }
        })
      
        for (let i = 0; i < 6; i++) {
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
        values: data
      })
    }
        
  }


  randomNumber(number) {
    return (
      Math.floor(Math.random(number) * number)
    )
  }

  startGame() {      
    this.setState({
      isStarted: true
    })
  }

  nextLevel() {
    this.setState({
      gameLevel: this.state.gameLevel + 1
    })
    this.startGame()
    console.log(this.state.gameLevel)
  }

  checkCard(item, key) {
    const cardStatus = [ ...this.state.cardStatus ]

    cardStatus[key] = false

    if (item === this.state.secretCards[0] || item === this.state.secretCards[1] || item === this.state.secretCards[2]) {
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
      // console.log(item)
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
      this.state.timerOn ? this.setState({ timerOn: false }) : null

      return (
        <ModalOverGame>
          <ModalOverGameBlock>
            <div>
              <ModalOverGameTitle>Время или попытки закончились</ModalOverGameTitle>
              <ModalOverGameLabel>Время: { this.state.timeLeft }</ModalOverGameLabel>
              <ModalOverGameLabel>Счёт: { this.state.points }</ModalOverGameLabel>
              <ModalOverGameLabel>Попытки: { this.state.try }</ModalOverGameLabel>
            </div>
            <ButtonsArea>
              <ModalOverButton onClick={() => {this.props.toMenu()}}>На главную</ModalOverButton>
              {this.state.points === 3 ? <ModalOverButton onClick={() => {this.nextLevel()}}>Новый уровень!</ModalOverButton> : ''}
            </ButtonsArea>
          </ModalOverGameBlock>
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
      this.state.timerOn ? setTimeout(() => {
        !this.state.isOver ? this.setState({ timerOn: false, isOver: true }) : null
      }, 10000) : null
      console.log('Игра началась')
      return (
        <div>
          <ModuleCardsSelect>
            { this.renderCard() }
          </ModuleCardsSelect>
          <div>Попыток: { this.state.try }</div>
          <div>Ваш счёт: { this.state.points }</div>
          <div>Время: { this.state.timeLeft }</div>
          <TimerLeft />
        </div>
      )
    }
  }

  isStarted() {
    if (this.state.isUserPlay === false) {
      if (this.state.isStarted) {
        setTimeout(() => {this.setState({ isUserPlay: true, timerOn: true })}, 15000)
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
              {this.state.gameLevel === 2 && <ModuleCard3>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[3] }</ModuleCardBack>
              </ModuleCard3>}
              {this.state.gameLevel === 3 && <ModuleCard3>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[4] }</ModuleCardBack>
              </ModuleCard3> }
              {this.state.gameLevel === 4 && <ModuleCard3>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[5] }</ModuleCardBack>
              </ModuleCard3> }
              {this.state.gameLevel === 5 && <ModuleCard3>
                <ModuleCardFront></ModuleCardFront>
                <ModuleCardBack>{ this.state.secretCards[6] }</ModuleCardBack>
              </ModuleCard3>}
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
          <ModuleTitle>Три слова</ModuleTitle>
          { this.isStarted() }
          { this.isPlay() }
          { this.isOver() }
        </Module>
      </PageWrapper>
    )
  }

}
