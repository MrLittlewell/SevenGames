import React, { Component } from 'react'
import { connect } from 'react-redux'
import cookie from 'react-cookies'

import Content from './content'

import UserBarWrapper from '../../../Components/UserBar'
import { authCheckAction } from '../../../actions'
import { checkAuthKey } from '../../../../api'
import {
  AppWrapper,
  PageContent,
} from '../styled'


class Game3 extends Component {
  constructor(props) {
    super(props)

    const authKey = cookie.load('authKey')

    if (authKey !== undefined) {
      checkAuthKey(authKey)
      .then((response) => {
        if (authKey === (response.data[0] && response.data[0].authKey)) {
          let data = {
            userId: response.data[0].id,
            authKey: response.data[0].authKey,
            name: response.data[0].name,
            mail: response.data[0].mail,
            auth: true,
          }

          props.authCheckAction(data)
        }
      })
    }
  }

  render() {
    return (
      <AppWrapper>
        <UserBarWrapper
          data = { this.props.data }
          page = 'Games'
        />
        <PageContent>
          <Content
            data = { this.props.data }
          />
        </PageContent>
      </AppWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.user
})

const dispatchToProps = (dispatch) => ({
  authCheckAction: (data) => dispatch(authCheckAction(data))
})

export default connect(mapStateToProps, dispatchToProps)(Game3)