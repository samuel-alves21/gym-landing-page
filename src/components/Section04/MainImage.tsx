import { styled } from 'styled-components'
import { breakinpPoints } from '../../utils/breakingPoints'
import img from '../../img/section04-image.png'

export const MainImage = () => {
  return <Img src={img} alt='couple-img' />
}

const Img = styled.img`
  z-index: 3;
  transform: translateY(100px);

  @media (max-width: ${breakinpPoints.largeDesktop}px) {
    display: none;
  }
`
