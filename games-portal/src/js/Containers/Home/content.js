import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PageWrapper,
  PageTitle,
} from './styled'

export default class Content extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <PageWrapper>
        <PageTitle>Домашняя страница</PageTitle>
      </PageWrapper>
    )
  }
}