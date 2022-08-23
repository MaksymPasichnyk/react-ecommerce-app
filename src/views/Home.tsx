import React from "react";
import MainMenu from "../components/Menu/MainMenu";
import Section from "../components/Section/Section";
import SectionColumn from "../components/Section/SectionColumn/SectionColumn";
import CategoryMenu from "../components/CategoryMenu/CategoryMenu";
import ProductCardList from "../components/ProductCardList/ProductCardList";
import Banner from "../components/Banner/Banner";
import QuoteSlider from "../components/QuoteSlider/QuoteSlider";
import BlogSection from "../components/BlogSection/BlogSection";

function Home() {
  return (
    <>
      <MainMenu />
      <Section>
          <CategoryMenu />
        <Banner />
        <Banner />
      </Section>
      <Section>
          <CategoryMenu />
        <ProductCardList />
      </Section>
      <Section>
        <QuoteSlider />
      </Section>
      <Section>
        <BlogSection />
      </Section>
    </>
  );
}

export default Home;
