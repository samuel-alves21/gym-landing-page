import { styled } from 'styled-components'
import { breakinpPoints } from '../../../utils/breakingPoints'

export const Form = () => {
  return (
    <Wrapper>
      <h2>entre em contato</h2>
      <p>Matricule-se agora mesmo! Fale com um de nossos atendentes</p>
      <FormWrapper action=''>
        <div>
          <InputWrapper>
            <Input type='text' placeholder='NOME' />
            <Line1 />
          </InputWrapper>
          <InputWrapper>
            <Input type='text' placeholder='TELEFONE' />
            <Line2 />
          </InputWrapper>
        </div>
        <Btn type='submit' className='path'>
          SOLICITAR CONTATO
        </Btn>
      </FormWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h2 {
    margin-top: -29px;
  }

  @media (max-width: ${breakinpPoints.largeDesktop}px) {
    align-items: center;
    text-align: center;
  }
`

const FormWrapper = styled.form`
  & > div {
    margin: 20px 0;
    width: fit-content;
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }

  @media (max-width: ${breakinpPoints.largeDesktop}px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      flex-direction: column;
    }
  }
`

const Btn = styled.button`
  border: 1px solid var(--primary-color);
  width: 235px;
  border-radius: 0;
  background-color: var(--primary-color);
  color: #fff;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 25px;
  text-align: left;

  &:hover {
    background-color: var(--primary-color-hover);
  }
`

const Input = styled.input`
  width: 235px;
  &:focus {
    outline: none;
  }
`

const InputWrapper = styled.div`
  position: relative;
`

const Line1 = styled.span`
  position: absolute;
  width: 51.3px;
  height: 1px;
  background-color: #fff;
  top: 10.2px;
  right: -2px;
  transform: rotateZ(25.6deg);
`

const Line2 = styled(Line1)``
