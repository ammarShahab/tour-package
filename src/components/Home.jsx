import React, { useState } from "react";

import RecipeHighlights from "./RecipeHighlights";
import NewsLetter from "./shared/NewsLetter";
import TopRecipes from "./TopRecipes";
import Banner from "./shared/Banner";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <TopRecipes></TopRecipes>
      <RecipeHighlights></RecipeHighlights>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
