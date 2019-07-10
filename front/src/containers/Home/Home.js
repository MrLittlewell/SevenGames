import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  AppWraper,
}from './styled'

import Games from '../Games'

class Home extends Component {
  render() {
    return (
      <AppWraper>
        <Games />
      </AppWraper>
    )
  }
}

Home.propTypes = {}

export default Home
