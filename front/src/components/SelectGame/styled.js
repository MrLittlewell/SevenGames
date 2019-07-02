import styled from 'styled-components'

import card_1 from '../../img/card_bg/card_1.png';


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