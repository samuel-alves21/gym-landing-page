import { styled } from 'styled-components'
import { useContext } from 'react'
import { FilterContext, FilterContextInterface } from '../context/FilterContext'
import { breakinpPoints } from '../utils/breakingPoints'

interface StyledFilterProps {
  filter: boolean
}

export const Filter = () => {
  const { filter, setFilter } = useContext(FilterContext) as FilterContextInterface

  const handleClick = () => {
    setFilter(false)
  }

  return <StyledFilter filter={filter} onClick={handleClick}></StyledFilter>
}

const StyledFilter = styled.div<StyledFilterProps>`
  display: none;
  position: absolute;
  background-color: #0000007a;
  z-index: 5;
  height: 100%;
  width: 100vw;

  @media (max-width: ${breakinpPoints.mobile}px) {
    display: ${(props) => props.filter ? 'initial' : 'none'};
  }
`