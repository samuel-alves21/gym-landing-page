import { styled } from 'styled-components'
import { useContext } from 'react'
import { FilterContext, FilterContextInterface } from '../../context/FilterContext'
import { breakinpPoints } from '../../utils/breakingPoints'

interface WrapperProps {
  $shouldDisplayMobileNav: boolean
}

export const MobileNav = () => {
  const { setFilter, filter } = useContext(FilterContext) as FilterContextInterface

  const handleClick = () => {
    setFilter(false)
  }

  return (
    <Wrapper $shouldDisplayMobileNav={filter}>
      <a href="">sobre</a>
      <a href="">serviços</a>
      <a href="">preços</a>
      <a href="">equipamentos</a>
      <a href="">Registre-se</a>
      <i className="bi bi-x-lg" onClick={handleClick}></i>
    </Wrapper>
  )
}

const Wrapper = styled.div<WrapperProps>`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  background-color: var(--secundary-color);
  right: 0;
  top: 0;
  padding: 1rem 1.5rem;
  gap: 15px;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ $shouldDisplayMobileNav }) => $shouldDisplayMobileNav ? '0' : '100%'});

  & .bi-x-lg {
    font-size: 1.4rem;
    color: #fff;
    cursor: pointer;  
  }

  & .bi-x-lg:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${breakinpPoints.mobile}px) {
    display: flex;
  }
`