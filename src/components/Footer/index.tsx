import { styled } from "styled-components"
import { breakinpPoints } from "../../utils/breakingPoints"

export const Footer = () => {
  return <Wrapper></Wrapper>
}

const Wrapper = styled.section`
  height: 200px;
  z-index: 3;
  position: relative;

  @media (max-width: ${breakinpPoints.mobile}px) {
    height: 100px;
  }
`