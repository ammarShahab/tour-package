import RecipeHighlights from "./packages/RecipeHighlights";
import NewsLetter from "./shared/NewsLetter";

import Banner from "./shared/Banner";
import FeaturedPackages from "./shared/FeaturedPackages";
import { Suspense, use } from "react";
import AuthContext from "./context/AuthContext";

const featuredPackagesPromise = fetch(
  "http://localhost:3000/featured-packages"
).then((res) => res.json());

const Home = () => {
  const { isLoading } = use(AuthContext);
  return (
    <>
      <Banner></Banner>
      <Suspense fallback={isLoading}>
        <FeaturedPackages
          featuredPackagesPromise={featuredPackagesPromise}
        ></FeaturedPackages>
      </Suspense>
      <RecipeHighlights></RecipeHighlights>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
