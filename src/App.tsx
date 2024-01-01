import { styled } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { Section01 } from './components/Section01'
import { Filter } from './components/Filter'
import { Section02 } from './components/Section02'
import { SectionIntersection } from './components/SectionIntersection.tsx'
import { Section03 } from './components/Section03/index.tsx'
import { Section04 } from './components/Section04/index.tsx'
import { Section05 } from './components/Section05/index.tsx'
import { Footer } from './components/Footer/index.tsx'

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Filter />
        <Section01 />
        <SectionIntersection />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Footer />
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  width: min(100%, 2000px);
  overflow: hidden;
  position: relative;
  margin: 0 auto;
`

export default App
