import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import sound from '../../../../audio/drum.mp3'

import { SaveResultApi } from '../../../../api'
import {
  PageWrapper,
  PageTitle,
  Module,
  ModuleTitle,
  ModuleCards,
  ModuleCard,
  ModuleCardFront,
  ModuleCardBack,
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
  DrumBox,
} from './contentStyled.js'


export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameId: 4,
      isStarted: false,
      isUserPlay: false,
      secretCards: [
        this.randomNumber(),
        this.randomNumber(),
        this.randomNumber(),
        this.randomNumber(),
        this.randomNumber(),
        this.randomNumber()
      ],
      inputValues: [ 0, 0, 0, 0, 0, 0 ],
      randomCards: undefined,
      points: undefined,
      timerOn: false,
      timeLeft: 10,
      drumPart: 0,
      isUserClick: false,
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
      Math.floor(Math.random(3) * 3 + 1)
    )
  }

  startGame() {      
    this.setState({
      isStarted: true,
    })
  }
  
  isOver() {
    if (this.state.drumPart === 6) {
      const inputValuesCopy = this.state.inputValues
      const secretCards = this.state.secretCards
      const translateValues = [ 0, 0, 0, 0, 0, 0]
      var truePoints = 0

      this.state.timerOn ? ( this.setState({ timerOn: false }) ) : null

      inputValuesCopy.map((item, index) => {
        if (item === 1) { translateValues[index] = 2 } else if (item === 2) { translateValues[index] = 3 } else if (item === 3) { translateValues[index] = 1 }
      })

      for (let i = 0; i < 6; i++) {
        console.log(translateValues, i)
        console.log(inputValuesCopy)
        if (translateValues[i] === secretCards[i]) { truePoints++ }
      }

      if (this.state.points === undefined) {
        console.log(this.state.points, truePoints, '222222222222')
        if ((truePoints === 6) || (truePoints === 5)) {
          this.setState({ points: 3 })
        } else if ((truePoints === 4) || (truePoints === 3)) {
          this.setState({ points: 2 })
        } if ((truePoints === 2) || (truePoints === 1)) {
          this.setState({ points: 1 })
        } else if (truePoints === 0) {
          this.setState({ points: 0 })
        }
      }

      return (
        <ModalOverGame>
          <ModalOverGameBlock>
            <ModalOverGameTitle>Попытки закончились</ModalOverGameTitle>
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

    console.log(data)

    SaveResultApi(data)
      .then((response) => {
        console.log(response.data)
      })
  }

  isStarted() {
    if (this.state.isUserPlay === false) {
      var inputValues = [...this.state.inputValues]
      const needClick = this.state.secretCards[this.state.drumPart]

      if (this.state.isStarted && (this.state.drumPart < 6)) {
        if (this.state.isUserClick) {
          setTimeout(() => { this.setState({
            drumPart: this.state.drumPart + 1,
            isUserClick: false,
            inputValues: inputValues
          }) }, 5000)
          console.log('Time to click')
          
        } else {
          for (let i = 0; i < this.state.secretCards[this.state.drumPart]; i++) {
            let secondsWait = Number(i + 1 + '000')
            setTimeout(() => {
              var audio = new Audio(sound)

              audio.play()
            } , secondsWait)
          }
          setTimeout(() => { this.setState({ isUserClick: true }) } , 4000)
        }

        return (
          <div>
            <ModuleCards>
              {/* <DrumBox>{needClick}</DrumBox> */}
              <DrumBox
                onClick = {
                  (this.state.isUserClick) ? ( () => {
                    // var inputValues = [...this.state.inputValues]
                    var audio = new Audio(sound)

                    inputValues[this.state.drumPart]++
                    audio.play()
                    // inputValues[this.state.drumPart]++
                    // this.setState({ inputValues: inputValues })
                  } ) : null
                }
              ></DrumBox>
            </ModuleCards>
            { (this.state.isUserClick) ? (<TimerLeft />) : null }
            { (!this.state.isUserClick) ? (<Timer />) : null }
          </div>
        )
      } else {
        return (
          <Module>
            <MobuleSubTitle>Правила:</MobuleSubTitle>
            <RulesItem>1. Барабан ударяет 6 раз</RulesItem>
            <RulesItem>2. После каждого удара у вас будет 5 секунд, чтобы ударить необходимое количество раз</RulesItem>
            <RulesItem>3. После 1 удара нужно сделать 3 удара</RulesItem>
            <RulesItem>4. После 2 ударов нужно сделать 1 удар</RulesItem>
            <RulesItem>5. После 3 ударов нужно сделать 2 удара</RulesItem>
            <CenterWrapper>
              <ModuleButtonRun to = '#' onClick = { () => this.startGame() } >Старт</ModuleButtonRun>
            </CenterWrapper>
          </Module>
        )
      }
    }
  }

  render() {
    console.log(this.state.inputValues, 'рендер', this.state.drumPart)
    return (
      <PageWrapper>
        <PageTitle>Игры</PageTitle>
        <Module>
          <ModuleTitle>Барабанные палочки</ModuleTitle>
          { this.isStarted() }
          { this.isOver() }
        </Module>
      </PageWrapper>
    )
  }
}