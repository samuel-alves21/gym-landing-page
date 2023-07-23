import arrow from '../../img/Arrow1.png'
import { styled } from 'styled-components'
import { breakinpPoints } from '../../utils/breakingPoints'

interface CardProps {
  img: string
  heading: string
  paragraph: string
  btnText: string
  special: boolean
}

interface SpecialProps {
  special: boolean
}

export const Card = ({ img, heading, paragraph, btnText, special }: CardProps) => {
  return (
    <Wrapper special={special}>
      <Img src={img} alt='' />
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      <Btn className='styled-a ' special={special}>
        <a href='#sign-up'>{btnText}</a>
        <img src={arrow} alt='' />
      </Btn>
    </Wrapper>
  )
}

const Img = styled.img`
  width: 77px;
  height: 77px;
`

const Wrapper = styled.div<SpecialProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ special }) => (special ? 'var(--secundary-color)' : 'initial')};
  padding: 20px;

  & p {
    width: 273px;
  }

  @media (max-width: ${breakinpPoints.desktop}px) {
    align-items: center;
    text-align: center;
  }
`

const Btn = styled.div<SpecialProps>`
  background-color: ${({ special }) => (special ? 'var(--terciary-color)' : '')};
  max-width: 200px;

  &:hover {
    background-color: ${({ special }) => (special ? 'var(--terciary-color-hover)' : '')};
  }
`
