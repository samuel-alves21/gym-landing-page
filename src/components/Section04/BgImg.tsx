import { styled } from 'styled-components'
import img from '../../img/section04-bg.png'

export const BgImg = () => {
  return <Img src={img} alt='' />
}

const Img = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
`
