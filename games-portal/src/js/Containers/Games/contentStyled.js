import styled from 'styled-components'
import { Link } from 'react-router-dom'

import card_1 from '../../../img/card_bg/card_1.png'
import card_2 from '../../../img/card_bg/card_2.png'
import card_3 from '../../../img/card_bg/card_3.png'
import card_4 from '../../../img/card_bg/card_4.png'
import card_5 from '../../../img/card_bg/card_5.png'
import card_6 from '../../../img/card_bg/card_6.png'
import card_7 from '../../../img/card_bg/card_7.png'


export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2em;
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
  margin-top: 1em;
`
export const ModuleCard = styled(Link)`
  width: 10em;
  height: 10em;
  background-color: white;
  border-radius: 4px;
  background-size: contain;
  overflow: hidden;
  text-decoration: none;
  margin-right: 1em;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.2em rgba(0,0,0,0.23);
  &:hover {
    box-shadow: 0 0.2em 0.15em 0.05em rgba(0,0,0,0.19), 0 0.2em 0.2em 0.05em rgba(0,0,0,0.23);
  }
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
  font-size: 1.3em;
  font-weight: bold;
`