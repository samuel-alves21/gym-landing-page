import { styled } from 'styled-components'; 
import { breakinpPoints } from '../../utils/breakingPoints';

export const Links = () => {
  return (
    <Wrapper>
      <a href="">sobre</a>
      <a href="">serviços</a>
      <a href="">preços</a>
      <a href="">equipamentos</a>
      <div className='styled-a'>
        <a href="">Registre-se</a>
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

  @media (max-width: ${breakinpPoints.mobile}px)  {
    display: none;
  }
`