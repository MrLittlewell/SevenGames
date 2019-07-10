import styled, { keyframes } from 'styled-components'

import cardWrapperImg from '../../../img/card_bg/card_front.jpg'


const flip = keyframes`
  0% {
    transform: rotateY(0);
  }

  20% {
    transform: rotateY(180deg);
  }

  80% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(0);
  }
`
const flipConst = keyframes`
  0% {
    transform: rotateY(0);
  }

  100% {
    transform: rotateY(180deg);
  }
`
const skip = keyframes`
  0% {
    opacity: 1;
  }

  95% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`
const timerKeyframes = keyframes`
  0% {
    width: 70%;
    background-color: #50af50;
  }

  100% {
    width: 0%;
    background-color: #e22828;
  }
`
const showModalKeyframes = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 0);
  }
  
  100% {
    background-color: rgba(0, 0, 0, 0.15);
  }
`

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  box-sizing: border-box;
  position: relative;
`
export const PageTitle = styled.span`
  font-size: 2em;
  color: #3e3e3e;
`
export const Module = styled.div`
  padding: 1.5em;
`
export const ModuleTitle = styled.div`
  font-size: 1.5em;
  color: #3e3e3e;
`
export const ModuleCards = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1em;
  overflow: hidden;
  animation: ${skip} 20s ease-in-out forwards;
`
export const ModuleCardsSelect = styled(ModuleCards)`
  animation: none;
`
export const CenterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1em;
`
export const ModuleCard = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 12em;
  height: 12em;
  border-radius: 4px;
  margin: 0.5em 0.5em;
  transform-style: preserve-3d;
  perspective: 500px;
  // animation: ${flip} 4s ease-in-out;
  box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.2em rgba(0,0,0,0.23);
`
export const ModuleCard1 = styled(ModuleCard)`
  animation-delay: 1s;
`
export const ModuleCard2 = styled(ModuleCard)`
  animation-delay: 5s;
`
export const ModuleCard3 = styled(ModuleCard)`
  animation-delay: 9s;
`
export const ModuleCardSelect = styled(ModuleCard)`
  animation: ${flipConst} 0.4s ease-in-out forwards;
  cursor: pointer;
`
export const ModuleCardsWords = styled(ModuleCard)`
  padding: 0 2em;
  width: auto;
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
`
export const ModuleCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  backface-visibility: hidden;
  background-image: url(${cardWrapperImg});
  background-size: cover;
  background-position: center;
  box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.2em rgba(0,0,0,0.23);
`
export const ModuleCardBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: #fafafa;
  text-transform: uppercase;
  box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.2em rgba(0,0,0,0.23);
`
export const ModuleButtonRun = styled.span`
  display: block;
  font-size: 1em;
  line-height: 1em;
  color: white;
  background-color: #589500;
  width: 8em;
  height: 1em;
  padding: 0.5em 0;
  margin: 0.5em auto 0;
  text-align: center;
  border-radius: 10em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.2em rgba(0,0,0,0.23);
  &:hover {
    box-shadow: 0 0.2em 0.25em rgba(0,0,0,0.19), 0 0.3em 0.3em rgba(0,0,0,0.23);
  }
`
export const Timer = styled.div`
  height: 0.5em;
  margin: 1.5em auto;
  animation: ${timerKeyframes} 20s linear;
`
export const ModalOverGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  animation: ${showModalKeyframes} 1s linear forwards;
`
export const ModalOverGameBlock = styled.div`
  background-color: white;
  border-radius: 4px;
  width: 20em;
  height: 20em;
  padding: 1em;
  box-sizing: border-box;
`
export const ModalOverGameTitle = styled.span`
  display: block;
  margin-bottom: 1em;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
`
export const ModalOverGameLabel = styled.span`
  display: block;
  font-size: 1.15em;
  line-height: 1.5em;
`
export const TimerLeft = styled(Timer)`
  animation-duration: 10s;
`
export const ModalOverButton = styled(ModuleButtonRun)`
  margin: 0 auto;
  text-decoration: none;
  color: white;
`
export const Kit = styled.div`
  display: flex;
  flex-direction: row;
  width: 40em;
  height: 15em;
  background-color: white;
  border-radius: 4px;
  margin: 1em 0 2em;
  box-shadow: 0 0.1em 1em rgba(0,0,0,0.19), 0 0.4em 0.5em rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 0.3em 1.5em rgba(0,0,0,0.19), 0 0.7em 0.9em rgba(0,0,0,0.23);
    transform: scale(1.01);
  }
`
export const KitPart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const KitKeyWorld = styled(KitPart)`
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
  color: #3e3e3e;
`
export const KitListElement = styled.div`
  font-size: 1.1em;
  margin: 0.4em;
  padding: 0.3em;
  background-color: #3e3e3e;
  background-color: ${props => props.state};
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
  box-shadow: 0 0.1em 0.2em rgba(0,0,0,0.19), 0 0.1em 0.2em rgba(0,0,0,0.23);
  &:hover {
    // background-color: #545454;
  }
`
export const MobuleSubTitle = styled.div`
  font-size: 1.2em;
  margin-top: 1em;
  margin-bottom: 0.3em;
  color: #3e3e3e;
`
export const RulesItem = styled.div`
  font-size: 1em;
  line-height: 1.5em;
  margin-left: 1em;
  color: #3e3e3e;
`
export const Exit = styled.span`
  position: absolute;
  z-index: 10;
  width: 30px;
  right: 20px;
`