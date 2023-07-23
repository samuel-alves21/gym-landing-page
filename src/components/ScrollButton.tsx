import { useState, useEffect } from 'react'
import { styled } from 'styled-components'

export const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Btn onClick={scrollToTop} style={{ display: showButton ? 'block' : 'none' }}>
      <i className="bi bi-arrow-up"></i>
    </Btn>
  )
}

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 220px;
  z-index: 5;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 0;
  background-color: var( --secundary-color-hover);
  padding: 0;

  & .bi-arrow-up {
    color: #fff;
    font-size: 30px;  
  }
`
