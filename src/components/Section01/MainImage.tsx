import { styled } from 'styled-components'
import image from '../../img/section01-man.png'
import { breakinpPoints } from '../../utils/breakingPoints'

export const MainImage = () => {
  return (
    <Img src={image} alt="" />
  )
}

const Img = styled.img`
  z-index: 3;
  transform: translateY(10px);

  @media (max-width: ${breakinpPoints.desktop}px) {
    display: none;
  }
`