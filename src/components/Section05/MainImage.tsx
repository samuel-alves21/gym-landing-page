import { styled } from 'styled-components'
import img from '../../img/section05-img.png'
import { breakinpPoints } from '../../utils/breakingPoints'

export const MainImage = () => {
  return <Img src={img} alt='' />
}

const Img = styled.img`
  position: absolute;
  right: 70px;
  top: -150px;
  bottom: 0;
  height: 526px;

  @media (max-width: ${breakinpPoints.largeDesktop}px) {
    display: none;
  }
`
