import styled, { keyframes} from 'styled-components'
import { Link } from 'react-router-dom'
import ava from '../../../img/ava.jpg'
import iconSettings from '../../../img/icons/settings.svg'
import iconExit from '../../../img/icons/exit.svg'
import iconHome from '../../../img/icons/home.svg'
import iconGames from '../../../img/icons/games.svg'
import iconStats from '../../../img/icons/stats.svg'


export const UserBarWrapper = styled.div`
  height: 100%;
  width: 20em;
  background-color: #fafafa;
  box-shadow: 1px 1px 1px #d1d1d1;
  z-index: 1000;
`
export const UserBarDecor = styled.div`
  height: 14em;
  width: 100%;
  background-color: #36a9e1;
`
export const UserBarInner = styled.div`
  position: relative;
  z-index: 1000;
  transform: translateY(-4em);
`
export const UserBarInfo = styled.div`
  padding: 0 1.5em;
`
export const InfoLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const InfoLogoButtonSettings = styled(Link)`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.2em rgba(0,0,0,0.23);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background-color: white;
  background-image: url(${iconStats});
  background-position: center;
  background-size: 40%;
  background-repeat: no-repeat;
  &:hover {
    box-shadow: 0 0.2em 0.25em rgba(0,0,0,0.19), 0 0.3em 0.3em rgba(0,0,0,0.23);
  }
`
export const InfoLogoButtonExit = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.2em rgba(0,0,0,0.23);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background-color: white;
  background-image: url(${iconExit});
  background-position: center;
  background-size: 40%;
  background-repeat: no-repeat;
  &:hover {
    box-shadow: 0 0.2em 0.25em rgba(0,0,0,0.19), 0 0.3em 0.3em rgba(0,0,0,0.23);
  }
`
export const InfoLogo = styled.div`
  width: 8em;
  height: 8em;
  border-radius: 50%;
  border: 0.25em solid #fafafa;
  box-sizing: border-box;
  background-image: url(${ava});
  background-size: contain;
`
export const InfoData = styled.div`
  width: 100%;
`
export const InfoDataName = styled.span`
  font-size: 1.4em;
  color: #545555;
  display: block;
  text-align: center;
  line-height: 1.5em;
  margin-top: 0.5em;
`
export const InfoDataMail = styled.div`
  font-size: 1.08em;
  color: #a6a7a7;
  display: block;
  text-align: center;
`
export const UserBarNav = styled.div`
  margin-top: 1.5em;
`
export const UserBarLink = styled(Link)`
  color: #a7a7a7;
  font-size: 1.15em;
  line-height: 2.5em;
  padding: 0 1em;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none !important;
  &:before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    margin: 0 0.5em 0.1em 0;
    background-repeat: no-repeat;
    background-position: center;
  }
  &:hover {
    background-color: #edeff0;
  }
  &:nth-child(1):before {
    background-image: url(${iconGames});
  }
`
export const UserBarAuthButton = styled.div`
  width: 8em;
  line-height: 2.25em;
  background-color: white;
  color: #36a9e1;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2em;
  border-radius: 10em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0.05em 0.1em rgba(0,0,0,0.19), 0 0.15em 0.15em rgba(0,0,0,0.23);
  &:hover {
    box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.5em rgba(0,0,0,0.23);
  }
`
export const UserBarSignUpButton = styled.div`
  width: 8em;
  line-height: 2.25em;
  background-color: #36a9e1;
  color: white;
  margin: 2em auto 0;
  text-align: center;
  font-size: 1.2em;
  border-radius: 10em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0.05em 0.1em rgba(0,0,0,0.19), 0 0.15em 0.15em rgba(0,0,0,0.23);
  &:hover {
    box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.5em rgba(0,0,0,0.23);
  }
`
const animationModal = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.15);
  }
`
export const ModalAuth = styled.div`
  position: absolute; 
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  animation: ${animationModal} 0.25s linear forwards;
`
export const ModalBlock = styled.div`
  width: 24em;
  min-height: 18em;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
`
export const HeaderModal = styled.div`
  width: 100%;
  height: 2.5em;
  // background-color: #36a9e1;
  color: black;
  font-size: 1.5em;
  line-height: 2.5em;
  padding: 0.4em 1.2em;
  box-sizing: border-box;
`
export const BodyModal = styled.div`
  width: 100%;
  padding: 1em 1.7em;
  box-sizing: border-box;
`
export const InputModal = styled.input`
outline: none;
font-size: 1em;
color: #888888;
padding: 0.5em 0.5em;
margin-bottom: 1.5em;
width: 100%;
border: none;
box-sizing: border-box;
transition: all 0.25s ease-in-out;
border-bottom: 2px solid rgba(102, 102, 102, 0.36);
&:focus {
  border-bottom: 2px solid #36a9e1;
}
`
export const ModalAuthButton = styled.div`
  width: 8em;
  line-height: 2.25em;
  background-color: #36a9e1;
  color: white;
  margin: 0.5em auto 0;
  text-align: center;
  font-size: 1.2em;
  border-radius: 10em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0.05em 0.1em rgba(0,0,0,0.19), 0 0.15em 0.15em rgba(0,0,0,0.23);
  &:hover {
    box-shadow: 0 0.1em 0.15em rgba(0,0,0,0.19), 0 0.2em 0.5em rgba(0,0,0,0.23);
  }
`
export const ErrorMessage = styled.div`
  margin-top: 1em;
  text-align: center;
  color: red;
`
export const UBWrapper = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 1px #d1d1d1;
  position: relative;
  z-index: 1000;
`