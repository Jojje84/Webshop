import styled, { createGlobalStyle } from "styled-components"
import Home from "./pages/Home"

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* {
box-sizing: border-box;
}
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App