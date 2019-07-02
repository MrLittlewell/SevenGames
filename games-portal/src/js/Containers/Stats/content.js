import React, { Component } from 'react'
import { connect } from 'react-redux'

import { statsAction } from '../../actions'
import { GetStats } from '../../../api'

import {
  PageWrapper,
  PageTitle,
  StatTable,
  StatTableLine,
  StatTableRow,
  StatTableValues,
} from './styled'


class Content extends Component {
  constructor(props) {
    super(props)

  }
  
  uploadStats() {
    if ((this.props && this.props.data.auth === true) && (this.props.data.stats === undefined)) {
      GetStats(this.props.data.userId)
        .then((response) => {
          this.props.statsAction(response.data[0])
        })
    }
  }

  renderStats() {
    if ((this.props && this.props.data) && (this.props.data.auth)) {
      const data = this.props.data.stats

      // console.log(data)

      return (
        <StatTableValues>
          <StatTableLine>
            <StatTableRow>Три слова</StatTableRow>
            <StatTableRow>{ data && data.points_1 }</StatTableRow>
          </StatTableLine>
          <StatTableLine>
            <StatTableRow>Три образа</StatTableRow>
            <StatTableRow>{ data && data.points_2 }</StatTableRow>
          </StatTableLine>
          <StatTableLine>
            <StatTableRow>Шесть цифр</StatTableRow>
            <StatTableRow>{ data && data.points_3 }</StatTableRow>
          </StatTableLine>
          <StatTableLine>
            <StatTableRow>Барабанные палочки</StatTableRow>
            <StatTableRow>{ data && data.points_4 }</StatTableRow>
          </StatTableLine>
          <StatTableLine>
            <StatTableRow>Запомнить и воспроизвести</StatTableRow>
            <StatTableRow>{ data && data.points_5 }</StatTableRow>
          </StatTableLine>
          <StatTableLine>
            <StatTableRow>Исключи лишнее</StatTableRow>
            <StatTableRow>{ data && data.points_6 }</StatTableRow>
          </StatTableLine>
          <StatTableLine>
            <StatTableRow>Выделение существенных признаков</StatTableRow>
            <StatTableRow>{ data && data.points_7 }</StatTableRow>
          </StatTableLine>
        </StatTableValues>
      )
    } else {
      return (
        <StatTableValues>
          <StatTableLine>
            <StatTableRow>Загрузка...</StatTableRow>
          </StatTableLine>
        </StatTableValues>
      )
    }
  }

  render() {
    this.uploadStats()
    if (this.props.data.stats !== undefined) {
      setTimeout(() => {
        GetStats(this.props.data.userId)
          .then((response) => {
            this.props.statsAction(response.data[0])
          })
      }, 1000)
    }

    return (
      <PageWrapper>
        <PageTitle>Статистика</PageTitle>
        <StatTable>
          <StatTableLine>
            <StatTableRow>Игра</StatTableRow>
            <StatTableRow>Баллы</StatTableRow>
          </StatTableLine>
        </StatTable>
        { this.renderStats()  }
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.user
})
const dispatchToProps = (dispatch) => ({
  statsAction: (userId) => dispatch(statsAction(userId))
})

export default connect(mapStateToProps, dispatchToProps)(Content)