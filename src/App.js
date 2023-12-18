import { Toaster } from 'react-hot-toast'
import GlobalStyle from './GlobalStyle'
import Router from './shared/Router'

function App() {
  return (
    <>
      <Toaster />
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App
