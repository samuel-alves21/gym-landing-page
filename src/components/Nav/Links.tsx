import { styled } from 'styled-components'
import { breakinpPoints } from '../../utils/breakingPoints'

export const Links = () => {
  return (
    <Wrapper>
      <A href='#services'>sobre</A>
      <A href='#services'>serviços</A>
      <A href='#prices'>preços</A>
      <A href='#services'>equipamentos</A>
      <div className='styled-a'>
        <a href='#sign-up'>Registre-se</a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  gap: 20px;
  align-items: center;
  z-index: 3;
  flex-grow: 1;
  justify-content: flex-end;

  @media (max-width: ${breakinpPoints.mobile}px) {
    display: none;
  }
`

export const A = styled.a`
  transition: color 0.2s ease;

  &:hover {
    color: var(--secundary-color-hover);
  }
`
