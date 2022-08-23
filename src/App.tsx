import React from "react";
import Container from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Category from "./views/Category";
import Home from "./views/Home";

function App() {
  return (
    <Container>
			<Header />
			{/*<Home />*/}
			<Category />
			<Footer />
    </Container>
  );
}

export default App;
