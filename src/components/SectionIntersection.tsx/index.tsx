import { styled } from 'styled-components'
import { breakinpPoints } from '../../utils/breakingPoints'
import icon from '../../img/barbell.png'

export const SectionIntersection = () => {
  return (
    <Wrapper>
      <Track>
        <div>
          <span>consultoria&nbsp;</span>
          <span>individual&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>+20&nbsp;</span>
          <span>professores&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>treine&nbsp;</span>
          <span>da&nbsp;</span>
          <span>sua&nbsp;</span>
          <span>forma&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>+15&nbsp;</span>
          <span>unidades&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>montamos&nbsp;</span>
          <span>seu&nbsp;</span>
          <span>treino&nbsp;</span>
        </div>
        <img src={icon} alt='' />

        <div>
          <span>consultoria&nbsp;</span>
          <span>individual&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>+20&nbsp;</span>
          <span>professores&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>treine&nbsp;</span>
          <span>da&nbsp;</span>
          <span>sua&nbsp;</span>
          <span>forma&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>+15&nbsp;</span>
          <span>unidades&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>montamos&nbsp;</span>
          <span>seu&nbsp;</span>
          <span>treino&nbsp;</span>
        </div>
        <img src={icon} alt='' />

        <div>
          <span>consultoria&nbsp;</span>
          <span>individual&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>+20&nbsp;</span>
          <span>professores&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>treine&nbsp;</span>
          <span>da&nbsp;</span>
          <span>sua&nbsp;</span>
          <span>forma&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>+15&nbsp;</span>
          <span>unidades&nbsp;</span>
        </div>
        <img src={icon} alt='' />
        <div>
          <span>montamos&nbsp;</span>
          <span>seu&nbsp;</span>
          <span>treino&nbsp;</span>
        </div>
        <img src={icon} alt='' />
      </Track>
    </Wrapper>
  )
}

const Track = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  animation: scroll 40s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-1443.2px);
    }
  }
`

const Wrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  align-items: center;
  background-color: var(--secundary-color);
  height: 56px;

  & > div > div {
    display: flex;
  }

  & span {
    color: #fff;
    font-family: Bebas Neue;
    font-size: 32px;
  }

  @media (max-width: ${breakinpPoints.largeDesktop}px) {
    width: 100%;
    height: 30px;

    & span {
      font-size: 20px;
    }

    & img {
      width: 30px
    }
  }
`
