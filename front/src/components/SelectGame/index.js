import React, { Component } from 'react'
import select from '../../img/logo.gif'
import { MainWrapper } from './styled'

export default class SelectGame extends Component {

  render() {
    return (
      <MainWrapper>
        <img src={select} alt="logo" />
        <h1>Выбери игру</h1>
      </MainWrapper>
    )
  }
}