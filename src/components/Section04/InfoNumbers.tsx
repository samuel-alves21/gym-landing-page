import { styled } from 'styled-components'
import { breakinpPoints } from '../../utils/breakingPoints'

interface InfoNumbersProps {
  heading: string
  description: string
}

export const InfoNumbers = ({ heading, description }: InfoNumbersProps) => {
  return (
    <Wrapper>
      <h1>{heading}</h1>
      <p>{description}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 218px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${breakinpPoints.largeDesktop}px) {
    align-items: center;
  }

  & h1 {
    font-family: Bebas Neue;
  }
`
