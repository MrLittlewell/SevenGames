import styled, { keyframes } from 'styled-components'

import cardWrapperImg from '../../../img/card_bg/card_front3.png'


const flip = keyframes`
  0% {
    transform: rotateY(0);
  }

  5% {
    transform: rotateY(180deg);
  }

  95% {
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
export const Exit = styled.span`
  position: absolute;
  z-index: 10;
  width: 30px;
  right: 20px;
  cursor: pointer;
`
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 768px) {
    padding: 0.5em;
  }
`
export const PageTitle = styled.span`
  font-size: 2em;
  color: #3e3e3e;
`
export const Module = styled.div`
  padding: 1em;
  @media (max-width: 768px) {
    padding: 0;
  }
`
export const ModuleTitle = styled.div`
  font-size: 1.5em;
  color: #3e3e3e;
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`
export const ModuleCards = styled.div`
  width: 40em;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1em;
  overflow: hidden;
  animation: ${skip} 14s ease-in-out forwards;
  animation: none;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5em;
  }
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
  height: 8em;
  border-radius: 4px;
  margin: 0.5em 0.5em;
  transform-style: preserve-3d;
  perspective: 500px;
  animation: ${flip} 19s ease-in-out;
  box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.2em rgba(0,0,0,0.23);
  @media (max-width: 768px) {
    width: 5.6em;
    height: 4em;
    margin: 0.2em 0.1em;
  }
`
export const ModuleCard1 = styled(ModuleCard)`
  animation-delay: 1s;
`
export const ModuleCardSelect = styled(ModuleCard)`
  animation: ${flipConst} 0.4s ease-in-out forwards;
  cursor: pointer;
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
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 768px) {
    font-size: 10px;
  }
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
  margin-top: 0.5em;
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
  margin: 0 auto;
  animation: ${timerKeyframes} ${props => props.gameLevel} linear;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
export const ButtonsArea = styled.div`
  display: flex;
`
export const RoundTime = styled.div`
  color: #589500;
  font-size: 2em;
`
export const ModalOverLevel = styled.div`
  background-color: white;
  border-radius: 4px;
  width: 20em;
  height: 10em;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const BottomStats = styled.div`
@media (max-width: 768px) {
  font-size: 11px;
}
`