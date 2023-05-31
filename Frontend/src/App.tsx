import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from './routes/router'
import { GlobalStyle } from './style/global'
import { ControlDrawerProvider } from './context/controlDrawer'

function App() {
  return (
    <ControlDrawerProvider>
      <BrowserRouter>
        <GlobalStyle />
        <AllRoutes />
      </BrowserRouter>
    </ControlDrawerProvider>
  )
}

export default App
