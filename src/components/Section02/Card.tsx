import arrow from '../../img/Arrow1.png'
import { styled } from 'styled-components'

interface CardProps {
  img: string
  heading: string
  paragraph: string
  btnText: string
}

export const Card = ({ img, heading, paragraph, btnText }: CardProps) => {
  return (
    <Wrapper>
      <Img src={img} alt='' />
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      <Btn className='styled-a '>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;  padding: 20px;

  & p {
    width: 273px;
  }

  &:hover {
    transition: background-color 0.2s ease-in-out;
    background-color: var(--secundary-color);

    & div {
      transition: background-color 0.2s ease-in-out;
      background-color: var(--terciary-color) !important;
    }
  }
`

const Btn = styled.div`
  max-width: 200px;
`
