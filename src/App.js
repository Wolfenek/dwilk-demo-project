import React from "react";
// Utils
import GlobalStyles from "./utils/GlobalStyles";
import Container from "./utils/Container";
// Components
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <h1> Hello dude </h1>
      </Container>
    </>
  );
}

export default App;
