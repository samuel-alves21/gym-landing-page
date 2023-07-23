import { styled } from 'styled-components'
import arrow from '../../img/Arrow1.png'
import { breakinpPoints } from '../../utils/breakingPoints'

export const CallToAction = () => {
  return (
    <Wrapper>
      <div>
        <h1>AQUI NÃO SE</h1>
        <h2>TREINA FOFO</h2>
      </div>
      <p>
        Transforme-se na nossa academia! Oferecemos equipamentos modernos, instrutores qualificados e aulas para todos
        os níveis. Alcance seus objetivos fitness conosco. Experimente hoje!
      </p>
      <div className='styled-a'>
        <a href='#sign-up'>começar</a>
        <img src={arrow} alt='' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  flex-grow: 1;
  color: white;
  font-weight: 400;

  & p {
    max-width: 670px;
  }

  & h1,
  & h2 {
    margin-top: -75px;
  }

  @media (max-width: ${breakinpPoints.desktop}px) {
    align-items: center;
    text-align: center;

    & h1 {
      margin-top: -5px;
    }

    & h2 {
      margin-top: -40px;
    }
  }
`
