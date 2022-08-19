import React from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import MainMenu from "./components/Menu/MainMenu";
import Section from "./components/Section/Section";
import SectionColumn from "./components/Section/SectionColumn/SectionColumn";
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
import ProductCardList from "./components/ProductCardList/ProductCardList";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <Container>
      <Header />
      <MainMenu />
      <Section>
        <SectionColumn>
          <CategoryMenu />
        </SectionColumn>
        <Banner />
        <Banner />
      </Section>
      <Section>
        <SectionColumn>
          <CategoryMenu />
        </SectionColumn>
        <ProductCardList />
      </Section>
    </Container>
  );
}

export default App;
