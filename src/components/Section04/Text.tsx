import { styled } from 'styled-components'
import { breakinpPoints } from '../../utils/breakingPoints'
import { InfoNumbers } from './InfoNumbers'

export const Text = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <h1>Faça parte</h1>
          &nbsp; &nbsp; &nbsp;
          <h2>da família</h2>
        </div>
        <p>
          Nossa academia tem milhares de clientes satisfeitos com resultados surpreendentes. Junte-se a nós e comece a
          transformar seu corpo agora!
        </p>
      </div>
      <InfoWrapper>
        <InfoNumbers heading='+15' description='Unidades na cidade de São Paulo.' />
        <InfoNumbers heading='+2000' description='Alunos matriculados em nossas unidades.' />
        <InfoNumbers heading='+100' description='Professores altamente qualificados.' />
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  z-index: 3;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  text-align: left;
  gap: 30px;

  & > div > p {
    max-width: 814px;
    margin-top: -38px;
  }

  & > :first-child {
    & div {
      display: flex;
      align-items: center;
    }

    @media (max-width: 1845px) {
      & div {
        flex-direction: column;
        align-items: flex-start;
      }

      & h2 {
        margin-top: -80px;
      }

      & p {
        margin-top: 10px;
      }
    }

    @media (max-width: ${breakinpPoints.largeDesktop}px) {
      & div {
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      & h2 {
        margin-top: 0;
      }
    }

    @media (max-width: ${breakinpPoints.tablet}px) {
      & p {
        max-width: 525px;
      }
    }

    @media (max-width: ${breakinpPoints.mobile}px) {
      & div {
        flex-direction: column;
      }

      & h2 {
        margin-top: -51.5px;
      }
    }
  }

  & h1,
  & h2 {
    margin: 0;
  }

  @media (max-width: ${breakinpPoints.largeDesktop}px) {
    text-align: center;
    align-items: center;
    margin: 0 auto;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
