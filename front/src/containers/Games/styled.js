import styled, { keyframes } from 'styled-components'

const showModalKeyframes = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 0);
  }
  
  100% {
    background-color: rgba(0, 0, 0, 0.15);
  }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    box-sizing: border-box;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`
export const GameArea = styled.div`
    width: 85%;
    height: 100%;
    border: 0.2em solid gray;
    border-radius: 10px;
    margin-right: 30px;
    background-color: #b8c6db;
    overflow: hidden;
    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
    @media (max-width: 768px) {
      width: 100%;
      min-height: 550px;
    }
`
export const SelectGames = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 768px) {
      width: 100%;
    }
`
import card_1 from '../../img/card_bg/card_1.png'
import card_2 from '../../img/card_bg/card_2.png'
import card_3 from '../../img/card_bg/card_3.png'
import card_4 from '../../img/card_bg/card_4.png'
import card_5 from '../../img/card_bg/card_5.png'
import card_6 from '../../img/card_bg/card_6.png'
import card_7 from '../../img/card_bg/card_7.png'


export const WrapperModule = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Module = styled.div`
  padding: 0;
`
export const ModuleTitle = styled.div`
  font-size: 1.3em;
  color: #3e3e3e;
  text-align: center;
  font-weight: bold;
`
export const ModuleButtonRun = styled.div`
  font-size: 1em;
  color: white;
  background-color: #589500;
  width: 8em;
  padding: 0.5em 0;
  margin-top: 0.5em;
  text-align: center;
  border-radius: 10em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.2em rgba(0,0,0,0.23);
  &:hover {
    box-shadow: 0 0.2em 0.25em rgba(0,0,0,0.19), 0 0.3em 0.3em rgba(0,0,0,0.23);
  }
`
export const ModuleCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const ModuleCard = styled.div`
  width: 100%;
  height: 6em;
  background-color: white;
  border-radius: 4px;
  background-size: contain;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.2em rgba(0,0,0,0.23);
  &:hover {
    box-shadow: 0 0.2em 0.15em 0.05em rgba(0,0,0,0.19), 0 0.2em 0.2em 0.05em rgba(0,0,0,0.23);
  }
  background-size: cover;
  margin-bottom: 0.2em;
`
export const ModuleCard1 = styled(ModuleCard)`
  background-image: url(${card_1})
`
export const ModuleCard2 = styled(ModuleCard)`
  background-image: url(${card_2})
`
export const ModuleCard3 = styled(ModuleCard)`
  background-image: url(${card_3})
`
export const ModuleCard4 = styled(ModuleCard)`
  background-image: url(${card_4})
`
export const ModuleCard5 = styled(ModuleCard)`
  background-image: url(${card_5})
`
export const ModuleCard6 = styled(ModuleCard)`
  background-image: url(${card_6})
`
export const ModuleCard7 = styled(ModuleCard)`
  background-image: url(${card_7})
`
export const ModuleCardTitle = styled.span`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1em;
  font-weight: bold;
`
export const Section = styled.span`
  width 100%;
`
export const PageTitle = styled.span`
  font-size: 2em;
  color: #3e3e3e;
`
