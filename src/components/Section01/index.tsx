import bgImage from '../../img/section01-bg-img.jpg'
import { styled } from 'styled-components'
import { Nav } from '../Nav'
import { CallToAction } from './CallToAction'
import { MainImage } from './MainImage'
import { breakinpPoints } from '../../utils/breakingPoints'

export const Section01 = () => {
  return (
    <Wrapper id='home'>
      <Nav />
      <Img src={bgImage} alt='' />
      <div>
        <CallToAction />
        <MainImage />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  
  @media (max-width: ${breakinpPoints.desktop}px) {
    padding-bottom: 50px;
  }

  & > div {
    position: relative;
    margin: auto 0;
    display: flex;
    justify-content: space-between;
  }
`

const Img = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 101.4%;
`
