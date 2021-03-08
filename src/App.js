import { Container, GlobalStyle } from "./Components/GlobalStyles";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Products } from "./Components/Products";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Products />
      <Footer />
    </Container>
  );
}

export default App;
