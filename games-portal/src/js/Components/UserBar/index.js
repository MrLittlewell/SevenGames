import React, { Component } from 'react'
import { connect } from 'react-redux'
import cookie from 'react-cookies'
import { Link } from 'react-router-dom'

import { AuthApi, SignUpApi } from '../../../api'
import { loggedAction, logoutAction } from '../../actions'
import CarouselAvatars from '../CarouselAvatars'
import {
  UserBarWrapper,
  UserBarDecor,
  UserBarInner,
  UserBarInfo,
  InfoLogoWrapper,
  InfoData,
  InfoDataName,
  InfoDataMail,
  InfoLogoButtonSettings,
  InfoLogoButtonExit,
  InfoLogo,
  UserBarNav,
  UserBarLink,
  UserBarAuthButton,
  UserBarSignUpButton,
  ModalAuth,
  ModalBlock,
  HeaderModal,
  BodyModal,
  InputModal,
  ModalAuthButton,
  ErrorMessage,
  UBWrapper,
} from './styled'


class UserBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stateAuthModal: false,
      stateSignUpModal: false,
      userEmail: '',
      userPassword: '',
      userUpName: '',
      userUpEmail: '',
      userUpPassword: '',
      errorMessage: false,
      errorMessageUp: false,
      slide: 1,
    }
  }

  auth() {
    let data = {
      email: this.state.userEmail,
      password: this.state.userPassword,
      key: Math.random().toString(36).substr(2, 10),
    }

    AuthApi(data)
      .then((response) => {
        if (response.data !== false) {
          const data = {
            id: response.data.data.id,
            name: response.data.data.name,
            mail: response.data.data.mail,
            key: response.data.key,
            logged: response.data.logged,
          }
          
          cookie.save('authKey', data.key, { maxAge: 3600 })
          this.setState({
            stateAuthModal: false,
          })
          this.props.loggedAction(data)
        } else {
          this.setState({
            errorMessage: true,
          })
        }
      })
  }

  signUp() {
    let data = {
      email: this.state.userUpEmail,
      name: this.state.userUpName,
      password: this.state.userUpPassword,
    }

    SignUpApi(data)
      .then((response) => {
        if (response.data !== false) {
          this.setState({
            stateSignUpModal: false,
            errorMessageUp: false,
            stateAuthModal: true,
          })
        } else {
          console.log(response.data)
          this.setState({
            errorMessageUp: true,
          })
        }
      })
  }


  isLogged() {
    const showModal = () => {
      this.setState({
        stateAuthModal: this.state.stateAuthModal ? false : true,
      })
    }

    const showModalUp = () => {
      this.setState({
        stateSignUpModal: this.state.stateSignUpModal ? false : true,
      })
    }

    const closeModal = (e) => {
      if (e.target === e.currentTarget) {
        this.setState({
          stateAuthModal: this.state.stateAuthModal ? false : true,
        })
      }
    }

    const closeModalUp = (e) => {
      if (e.target === e.currentTarget) {
        this.setState({
          stateSignUpModal: this.state.stateSignUpModal ? false : true,
        })
      }
    }

    const inputEmail = (e) => {
      this.setState({
        userEmail: e.target.value
      })
    }

    const inputUpName = (e) => {
      this.setState({
        userUpName: e.target.value
      })
    }

    const inputUpEmail = (e) => {
      this.setState({
        userUpEmail: e.target.value
      })
    }

    const inputUpPassword = (e) => {
      this.setState({
        userUpPassword: e.target.value
      })
    }

    const inputPassword = (e) => {
      this.setState({
        userPassword: e.target.value
      })
    }

    const logout = () => {
      cookie.remove('authKey')
      this.props.logoutAction()
    }

    const selectAvatar = (slide) => {
      if (slide === 0) {
        slide = 1
      } else if (slide === 16) {
        slide = 15
      }
      this.setState({
        slide: slide
      })
    }

    if (this.props.data.auth) {
      return (
        <UserBarWrapper>
          <UBWrapper>
            <UserBarDecor />
            <UserBarInner>
              <UserBarInfo>
                <InfoLogoWrapper>
                  <InfoLogoButtonSettings to='/stats' />
                  <InfoLogo />
                  <InfoLogoButtonExit onClick = { () => { logout() } } />
                </InfoLogoWrapper>
                <InfoData>
                  <InfoDataName>{ this.props.data.userData.name }</InfoDataName>
                  <InfoDataMail>{ this.props.data.userData.mail }</InfoDataMail>
                </InfoData>
              </UserBarInfo>
              <UserBarNav>
                {/* <UserBarLink to='/home'>Home</UserBarLink>
                <UserBarLink to='/games'>Games</UserBarLink> */}
                <UserBarLink to='/games'>Игры</UserBarLink>
                {/* <UserBarLink to='/home'>Help</UserBarLink>
                <UserBarLink to='/home'>Exit</UserBarLink> */}
              </UserBarNav>
            </UserBarInner>
          </UBWrapper>
        </UserBarWrapper>
      )
    } else {
      return (
        <UserBarWrapper>
          <UBWrapper>
             <UserBarDecor />
            <UserBarInner>
              <UserBarAuthButton onClick = { () => { showModal() } } >Войти</UserBarAuthButton>
              <UserBarSignUpButton onClick = { () => { showModalUp() } } >Регистрация</UserBarSignUpButton>
            </UserBarInner>
          </UBWrapper>
          { (this.state.stateAuthModal) ? (
            <ModalAuth onClick = { (e) => { closeModal(e) } }>
              <ModalBlock>
                <HeaderModal>Авторизация</HeaderModal>
                <BodyModal>
                  <InputModal
                    placeholder = 'E-mail'
                    onChange = { (e) => { inputEmail(e) } }
                  ></InputModal>
                  <InputModal
                    placeholder = 'Пароль'
                    type = 'password'
                    onChange = { (e) => { inputPassword(e) } }
                  ></InputModal>
                  <ModalAuthButton onClick = { () => { this.auth() } }>Войти</ModalAuthButton>
                  { 
                    (this.state.errorMessage === true) ? (
                      <ErrorMessage>Неправильный логин или пароль</ErrorMessage>
                    ) : null
                  }
                </BodyModal>
              </ModalBlock>
            </ModalAuth>
          ) : null }

          { (this.state.stateSignUpModal) ? (
            <ModalAuth onClick = { (e) => { closeModalUp(e) } }>
              <ModalBlock>
                <HeaderModal>Регистрация</HeaderModal>
                <BodyModal>
                  <InputModal
                    placeholder = 'E-mail'
                    onChange = { (e) => { inputUpEmail(e) } }
                  ></InputModal>
                  <InputModal
                    placeholder = 'Имя'
                    onChange = { (e) => { inputUpName(e) } }
                  ></InputModal>
                  <InputModal
                    placeholder = 'Пароль'
                    type = 'password'
                    onChange = { (e) => { inputUpPassword(e) } }
                  ></InputModal>
                  <CarouselAvatars selectAvatar = { (nextSlide) => { selectAvatar(nextSlide) } } />
                  <ModalAuthButton onClick = { () => { this.signUp() } }>Создать</ModalAuthButton>
                  { 
                    (this.state.errorMessageUp === true) ? (
                      <ErrorMessage>Такой аккаунт уже существует</ErrorMessage>
                    ) : null
                  }
                </BodyModal>
              </ModalBlock>
            </ModalAuth>
          ) : null }
        </UserBarWrapper>
      )
    }
  }

  render() {
    return (
      <div>
        { this.isLogged() }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const dispatchToProps = (dispatch) => ({
  loggedAction: (data) => { dispatch(loggedAction(data)) },
  logoutAction: (data) => { dispatch(logoutAction(data)) },
})

export default connect(mapStateToProps, dispatchToProps)(UserBar)