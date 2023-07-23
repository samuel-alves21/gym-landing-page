import { styled } from "styled-components"

interface CardProps {
  img: string
  title: string
  description: string
  isSpecial?: boolean
  price?: string
}

interface SpecialProps {
  isSpecial: boolean
}

export const Card = ({ img, title, description, isSpecial, price }: CardProps) => {
  return (
    <Wrappper isSpecial={isSpecial as boolean}>
      {isSpecial && <Special>RECOMENDADO POR USUÁRIOS</Special>}
      <div>
        <img src={img} alt="" />
      </div>
      <h5>{title}</h5>
      <PriceWrapper>
        <div>
          <p>{description}</p>
          {price && <span>{price}</span>}
        </div>
        <Button isSpecial={isSpecial as boolean}>selecionar</Button>
      </PriceWrapper>
    </Wrappper>
  )
}

const Wrappper = styled.div<SpecialProps>`
  text-align: left;
  display: flex;
  flex-direction: column;
  width: calc(300px + 5vw);

  & img {
    margin-bottom: -5px;
    width: 100%
  }

  & h5 {
    padding: 15px ;
    background-color: ${({ isSpecial }) => isSpecial ? 'var(--terciary-color)' : 'black'}
  }
`

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--quaternary-color);

  & p {
    max-width: 100px;
    color: var(--quaternary-color-darker);
  }

  & span {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: bold;
  }
`

const Special = styled.span`
  text-align: center;
  padding: 10px 5px;
  background-color: var(--terciary-color);
  width: 100%;
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
`

const Button = styled.button<SpecialProps>`
  border-color: ${({ isSpecial }) => isSpecial ? 'var(--terciary-color)' : ''};
  color: ${({ isSpecial }) => isSpecial ? 'var(--terciary-color)' : ''};

  &:hover {
    background-color: ${({ isSpecial }) => isSpecial ? 'var(--terciary-color)' : ''};
  }
`