import { styled } from "styled-components"
import { Text } from "./Text"
import { BgImg } from "./BgImg"
import { MainImage } from "./MainImage"
import { breakinpPoints } from "../../utils/breakingPoints"

export const Section04 = () => {
  return (
    <Wrappper>
      <BgImg />
      <MainImage />
      <Text />
    </Wrappper>
  )
}

const Wrappper = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: 50px;
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: ${breakinpPoints.largeDesktop}px) {
    gap: 0;
    display: box;
  }

  @media (max-width: ${breakinpPoints.laptop}px) {
    padding-top: 20px;
    padding-bottom: 40px;
  }
`

