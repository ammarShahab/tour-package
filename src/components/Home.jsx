import Banner from "./shared/Banner";
import FeaturedPackages from "./shared/FeaturedPackages";
import { Suspense, use } from "react";
import AuthContext from "./context/AuthContext";
import GalleryCarousel from "./shared/GalleryCarousel";
import Loading from "./Loading";
import WhyChooseUs from "./shared/WhyChooseUs";

const featuredPackagesPromise = fetch(
  "https://b11a11-server-side-ashahab007.vercel.app/featured-packages"
  // "http://localhost:3000/featured-packages"
).then((res) => res.json());

const Home = () => {
  const { isLoading } = use(AuthContext);
  return (
    <>
      <Banner></Banner>
      <Suspense fallback={<Loading></Loading>}>
        <FeaturedPackages
          featuredPackagesPromise={featuredPackagesPromise}
        ></FeaturedPackages>
      </Suspense>
      <GalleryCarousel></GalleryCarousel>
      <WhyChooseUs></WhyChooseUs>
    </>
  );
};

export default Home;
