import { styled } from 'styled-components'
import { Card } from './Card'
import cardImg1 from '../../img/sport.png'
import cardImg2 from '../../img/dumbbell.png'
import cardImg3 from '../../img/trainer.png'
import cardImg4 from '../../img/gym.png'
import { breakinpPoints } from '../../utils/breakingPoints'
import { Text } from './Text'

export const Section02 = () => {
  return (
    <Wrapper id='services'>
      <Text />
      <CardsWrapper>
        <Card
          special={false}
          img={cardImg1}
          heading='Equipe Qualificada'
          paragraph='Profissionais altamente capacitados e motivados a ajudá-lo a alcançar seus objetivos.'
          btnText='conheça nossos profissionais'
        />
        <Card
          special={true}
          img={cardImg2}
          heading='Ambiente motivador'
          paragraph='Um ambiente seguro e inspirador para ajudá-lo a manter-se motivado durante seus treinos.'
          btnText='Faça um tour virtual'
        />
        <Card
          special={false}
          img={cardImg3}
          heading='Aulas Diversas'
          paragraph='Oferecemos uma ampla variedade de aulas, desde musculação até dança, para atender a todos os interesses.'
          btnText='Ver modalidades'
        />
        <Card
          special={false}
          img={cardImg4}
          heading='Equipamentos Modernos'
          paragraph='Mantemos nossos equipamentos atualizados para garantir a segurança e eficiência de nossos clientes.'
          btnText='faça um tour virtual'
        />
      </CardsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${breakinpPoints.desktop}px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakinpPoints.tablet}px) {
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    gap: 40px;
  }
`
