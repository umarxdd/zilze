import Carousel from "../components/Carousel";
import PopularCategories from "../features/categories/PopularCategories";
import Categories from "../features/categories/Categories";

const Home = () => {
  return (
    <>
      <Carousel />
      <PopularCategories />
      <Categories />
    </>
  );
};
export default Home;
