import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PageWrapper,
  PageTitle,
  Module,
  ModuleTitle,
  ModuleButtonRun,
  ModuleCards,
  ModuleCardTitle,
  ModuleCard1,
  ModuleCard2,
  ModuleCard3,
  ModuleCard4,
  ModuleCard5,
  ModuleCard6,
  ModuleCard7,
} from './contentStyled.js'


export default class Content extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <PageWrapper>
        <PageTitle>Игры</PageTitle>
        <Module>
          <ModuleTitle>Оценка памяти</ModuleTitle>
          <ModuleButtonRun>Запустить</ModuleButtonRun>
          <ModuleCards>
            <ModuleCard1 to='/game1'>
              <ModuleCardTitle>Три слова</ModuleCardTitle>
            </ModuleCard1>
            <ModuleCard2 to='/game2'>
              <ModuleCardTitle>Три образа</ModuleCardTitle>
            </ModuleCard2>
            <ModuleCard3 to='/game3'>
              <ModuleCardTitle>Шесть цифр</ModuleCardTitle>
            </ModuleCard3>
          </ModuleCards>
        </Module>
        <Module>
          <ModuleTitle>Оценка внимания</ModuleTitle>
          <ModuleButtonRun>Запустить</ModuleButtonRun>
          <ModuleCards>
            <ModuleCard4 to='/game4'>
              <ModuleCardTitle>Барабанные палочки</ModuleCardTitle>
            </ModuleCard4>
            <ModuleCard5 to='/game5'>
              <ModuleCardTitle>Запомнить и воспроизвести</ModuleCardTitle>
            </ModuleCard5>
          </ModuleCards>
        </Module>
        <Module>
          <ModuleTitle>Оценка мышления</ModuleTitle>
          <ModuleButtonRun>Запустить</ModuleButtonRun>
          <ModuleCards>
            <ModuleCard6 to='/game6'>
              <ModuleCardTitle>Исключи лишнее</ModuleCardTitle>
            </ModuleCard6>
            <ModuleCard7 to='/game7'>
              <ModuleCardTitle>Выделение существенных признаков</ModuleCardTitle>
            </ModuleCard7>
          </ModuleCards>
        </Module>
      </PageWrapper>
    )
  }
}