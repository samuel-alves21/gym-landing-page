import { styled } from "styled-components"
import { Card } from "./Card"
import card01 from '../../img/card01.jpg'
import card02 from '../../img/card02.png'
import card03 from '../../img/card03.png'
import { breakinpPoints } from "../../utils/breakingPoints"

export const Section03 = () => {
  return (
    <Wrapper>
      <h2>nossos planos</h2>
      <CardsWrappper>
        <Card img={card01} title="passe de 1 dia" description="Teste gratuitamente"/>
        <Card img={card02} title="passe de 1 MÊS" description="À partir de" isSpecial={true} price="R$99,90"/>
        <Card img={card03} title="passe de 1 ANO" description="À partir de" price="R$999,00"/>
      </CardsWrappper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: var(--secundary-color);
  text-align: center;

  & h2 {
    margin: 0;
  }

  @media (max-width: ${breakinpPoints.mobile}px) {
    padding-top: 20px;
    padding-bottom: 20px;

    & h2 {
      margin-bottom: 20px;
      font-size: 50px;
    }
  }
`

const CardsWrappper = styled.div`
  width: 100%;  
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 25px;
  align-items: flex-end;

  @media (max-width: ${breakinpPoints.mobile}px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`