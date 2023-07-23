import { styled } from 'styled-components'
import { breakinpPoints } from '../../utils/breakingPoints'
import { FilterContext, FilterContextInterface } from '../../context/FilterContext'
import { useContext } from 'react'

export const HamburguerLinks = () => {
  const { setFilter } = useContext(FilterContext) as FilterContextInterface

  const handleHamburguerClick = () => {
    setFilter(true)
  }

  return (
    <Wrapper>
      <i className='bi bi-list' onClick={handleHamburguerClick}></i>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  right: 40px;
  z-index: 10;
  display: box;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secundary-color);
  cursor: pointer;

  &:hover {
    background-color: var(--secundary-color-hover);
  }

  .bi-list {
    font-size: 2rem;
    color: #fff;
  }

  @media (min-width: ${breakinpPoints.mobile}px) {
    display: none;
  }
`
