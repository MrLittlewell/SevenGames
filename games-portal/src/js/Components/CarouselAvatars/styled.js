import styled from 'styled-components'
import arrowLeft from '../../../img/icons/arrow-left.svg'
import arrowRight from '../../../img/icons/arrow-right.svg'


export const CarouselAvatarsBlock = styled.div`
  width: 100%;
  height: 8em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const CarouselAvatarsWrapper = styled.div`
  width: 8em;
  height: 8em;
  position: relative;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  // border: 1px solid black;
`
export const CarouselAvatar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${ props => props.img });
  background-size: cover;
  transform: translateX(${ props => props.position });
  transition: 0.15s;
`
export const CarouselAvatarsButton = styled.div`
  width: 2.25em;
  height: 2.25em;
  margin: 0 1em;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  z-index: 1000;
  background-image: url(${ props => props.direction === 'left' ? arrowLeft : arrowRight });
  background-size: cover;
`