import styled, { keyframes } from 'styled-components'

const showModalKeyframes = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 0);
  }
  
  100% {
    background-color: rgba(0, 0, 0, 0.15);
  }
`
export const ModuleButtonRun = styled.span`
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
border-radius: 10px;
width: 20em;
height: auto;
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
export const ModalOverButton = styled(ModuleButtonRun)`
margin: 0 auto;
text-decoration: none;
color: white;
`
export const ButtonBox = styled.div`
display: flex;
`