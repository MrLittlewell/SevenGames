import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tab from '../../components/SelectGame'
import { 
  SelectGames,
  Wrapper,
  GameArea,
  ModuleCard,
  ModuleCard1,
  ModuleCard2,
  ModuleCard3,
  ModuleCard4,
  ModuleCard5,
  ModuleCard6,
  ModuleCard7,
  Section,
  ModuleTitle,
  ModuleCardTitle,
  PageTitle, } from './styled'
import Game1 from './GameOne'
import Game2 from './GameTwo'
import Game3 from './GameThree'
import Game4 from './GameFour'
import Game5 from './GameFive'
import Game6 from './GameSix'
import Game7 from './GameSeven'
import SelectGame from '../../components/SelectGame'


class Games extends Component {
  constructor(props) {
    super()
    this.state = {
      SelectGame: true,
      GameOne: false,
      GameTwo: false,
      GameThree: false,
      GameFour: false,
      GameFive: false,
      GameSix: false,
      GameSeven: false,
    }
  }
  
  toggleOne = () => {
    this.setState({
      SelectGame: false,
      GameOne: true,
      GameTwo: false,
      GameThree: false,
      GameFour: false,
      GameFive: false,
      GameSix: false,
      GameSeven: false,
    })
  }

  toggleTwo = () => {
    this.setState({
      SelectGame: false,
      GameOne: false,
      GameTwo: true,
      GameThree: false,
      GameFour: false,
      GameFive: false,
      GameSix: false,
      GameSeven: false,
    })
  }

  toggleThree = () => {
    this.setState({
      SelectGame: false,
      GameOne: false,
      GameTwo: false,
      GameThree: true,
      GameFour: false,
      GameFive: false,
      GameSix: false,
      GameSeven: false,
    })
  }

  toggleFour = () => {
    this.setState({
      SelectGame: false,
      GameOne: false,
      GameTwo: false,
      GameThree: false,
      GameFour: true,
      GameFive: false,
      GameSix: false,
      GameSeven: false,
    })
  }

  toggleFive = () => {
    this.setState({
      SelectGame: false,
      GameOne: false,
      GameTwo: false,
      GameThree: false,
      GameFour: false,
      GameFive: true,
      GameSix: false,
      GameSeven: false,
    })
  }

  toggleSix = () => {
    this.setState({
      SelectGame: false,
      GameOne: false,
      GameTwo: false,
      GameThree: false,
      GameFour: false,
      GameFive: false,
      GameSix: true,
      GameSeven: false,
    })
  }

  toggleSeven = () => {
    this.setState({
      SelectGame: false,
      GameOne: false,
      GameTwo: false,
      GameThree: false,
      GameFour: false,
      GameFive: false,
      GameSix: false,
      GameSeven: true,
    })
  }

   toMainmenu = () => {
     this.setState({
       SelectGame: true,
       GameOne: false,
       GameTwo: false,
       GameThree: false,
       GameFour: false,
       GameFive: false,
       GameSix: false,
       GameSeven: false,
     })
   }

   render() {
     return (
       <Wrapper>
         <GameArea>
           {this.state.SelectGame && <SelectGame />}
           {this.state.GameOne && <Game1 toMainmenu={this.toMainmenu}/>}
           {this.state.GameTwo && <Game2 toMainmenu={this.toMainmenu}/>}
           {this.state.GameThree && <Game3 toMainmenu={this.toMainmenu}/>}
           {this.state.GameFour && <Game4 toMainmenu={this.toMainmenu}/>}
           {this.state.GameFive && <Game5 toMainmenu={this.toMainmenu}/>}
           {this.state.GameSix && <Game6 toMainmenu={this.toMainmenu}/>}
           {this.state.GameSeven && <Game7 toMainmenu={this.toMainmenu}/>}
         </GameArea>
         <SelectGames>
           <PageTitle>Игры</PageTitle>
           <Section>
             <ModuleTitle>Оценка памяти</ModuleTitle>
             <ModuleCard onClick={this.toggleOne}>
               <ModuleCard1>
                 <ModuleCardTitle>Три слова</ModuleCardTitle>
               </ModuleCard1>
             </ModuleCard>
             <ModuleCard onClick={this.toggleTwo}>
               <ModuleCard2>
                 <ModuleCardTitle>Три образа</ModuleCardTitle>
               </ModuleCard2>
             </ModuleCard>
             <ModuleCard onClick={this.toggleThree}>
               <ModuleCard3>
                 <ModuleCardTitle>Шесть цифр</ModuleCardTitle>
               </ModuleCard3>
             </ModuleCard>
           </Section>
           <Section>
             <ModuleTitle>Оценка внимания</ModuleTitle>
             <ModuleCard onClick={this.toggleFour}>
               <ModuleCard4>
                 <ModuleCardTitle>Барабанные палочки</ModuleCardTitle>
               </ModuleCard4>
             </ModuleCard>
             <ModuleCard onClick={this.toggleFive}>
               <ModuleCard5>
                 <ModuleCardTitle>Запомнить и воспроизвести</ModuleCardTitle>
               </ModuleCard5>
             </ModuleCard>
           </Section>
           <Section>
             <ModuleTitle>Оценка мышления</ModuleTitle>
             <ModuleCard onClick={this.toggleSix}>
               <ModuleCard6>
                 <ModuleCardTitle>Исключи лишнее</ModuleCardTitle>
               </ModuleCard6>
             </ModuleCard>
             <ModuleCard onClick={this.toggleSeven}>
               <ModuleCard7>
                 <ModuleCardTitle>Выделение существенных признаков</ModuleCardTitle>
               </ModuleCard7>
             </ModuleCard>
           </Section>
         </SelectGames>
       </Wrapper>
     )
   }
}

export default Games