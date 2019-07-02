import React, { Component } from 'react'

import {
  CarouselAvatarsBlock,
  CarouselAvatarsWrapper,
  CarouselAvatar,
  CarouselAvatarsButton,
} from './styled'


const srcImg = window.config.srcImg

export default class CarouselAvatars extends Component {

  constructor(props) {
    super(props)

    this.state = {
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      currentSlide: 1,
    }
  }

  carouselAvatars() {
    const images = this.state.images
    const currentSlide = this.state.currentSlide

    return images.map((image, index) => {
      return (
        <CarouselAvatar
          key = { index }
          img = { `${srcImg}/img/avatars/avatar-${image}.png` }
          position = { () => { if (image < currentSlide) { return '-100%'} else if (image > currentSlide) { return '100%' } else return '0' } }
        />
      )
    })
  }

  changeSlide(direction) {
    const currentSlide = this.state.currentSlide
    const nextSlide = currentSlide + direction
    const selectAvatar = this.props.selectAvatar

    selectAvatar(nextSlide)
    if (!(nextSlide <= 0 || nextSlide >= 16)) {
      this.setState({
        currentSlide: this.state.currentSlide + direction
      })
    }
  }

  render() {
    return (
      <CarouselAvatarsBlock>
        <CarouselAvatarsButton
          onClick = { () => { this.changeSlide(-1) } }
          direction = { 'left' }
        />
        <CarouselAvatarsWrapper>
          { this.carouselAvatars() }
        </CarouselAvatarsWrapper>
        <CarouselAvatarsButton
          onClick = { () => { this.changeSlide(1) } }
          direction = { 'right' }
        />
      </CarouselAvatarsBlock>
    )
  }
}