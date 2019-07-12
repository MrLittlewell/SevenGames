import React, { Component } from 'react'
import {
  ModalOverButton,
  ModalOverGame,
  ModalOverGameBlock,
  ModalOverGameTitle,
  ButtonBox,
} from './styled.js'
import PropTypes from 'prop-types'


export default class ModalClose extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return (
      <ModalOverGame onClick={() => this.props.backToGame()}>
        <ModalOverGameBlock>
          <div>
            <ModalOverGameTitle>Закончить игру?</ModalOverGameTitle>
          </div>
          <ButtonBox>
            <ModalOverButton onClick={() => this.props.toMenu()}>На главную</ModalOverButton>
            <ModalOverButton onClick={() => this.props.backToGame()}>Вернуться</ModalOverButton>
          </ButtonBox>
        </ModalOverGameBlock>
      </ModalOverGame>
    )
  }
}
