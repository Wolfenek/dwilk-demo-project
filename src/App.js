import React from "react";
// Utils
import GlobalStyles from "./utils/GlobalStyles";
import Container from "./utils/Container";
// Components
import Header from "./components/Header";
import HashTags from "./components/HashTags";
import ImageMainPage from "./components/ImageMainPage";
import Headline from "./components/Headline";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
      <HashTags />
      <Container>
        <ImageMainPage />

        <Headline />
      </Container>
    </>
  );
};

export default App;
