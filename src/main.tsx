import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FilterProvider } from './context/FilterContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FilterProvider>
    <App />
  </FilterProvider>,
)
