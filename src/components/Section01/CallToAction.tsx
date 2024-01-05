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
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  flex-grow: 1;
  color: white;
  font-weight: 400;

  & p {
    max-width: 670px;
    padding: 0 5px;
  }

  h1 {
    line-height: 0.3;
  }


  @media (max-width: ${breakinpPoints.desktop}px) {
    align-items: center;
    text-align: center;
  }
`
