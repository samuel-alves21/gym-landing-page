import { styled } from 'styled-components'
import { MainImage } from './MainImage'
import { Form } from './Form'

export const Section05 = () => {
  return (
    <Wrappper>
      <MainImage />
      <Form />
    </Wrappper>
  )
}

const Wrappper = styled.section`
  background-color: var(--secundary-color);
  position: relative;
`
