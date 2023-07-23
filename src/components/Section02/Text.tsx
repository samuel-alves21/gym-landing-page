import { styled } from "styled-components"
import { breakinpPoints } from "../../utils/breakingPoints"

export const Text = () => {
  return (
    <Wrapper>
      <h1>nossos</h1>
      &nbsp;
      &nbsp;
      &nbsp;
      <h2>diferenciais</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center; 

  @media (max-width: ${breakinpPoints.mobile}px) {
    flex-direction: column;

    &  h2 {
      margin-top: -61px;
    }
  }
`