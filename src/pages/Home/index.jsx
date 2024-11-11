import Carousel from "./Components/Carousel/Carousel";
import FAQs from "./Components/FAQs/FAQs";
import HeaderInfo from "./Components/Header Info/HeaderInfo";
import Hero from "./Components/Hero/Hero";
import OurServices from "./Components/OurServices/OurServices";

const Home = () => {
  return (
    <div className="min-h-screen gradient-bg px-4 lg:px-[104px]">
      <Hero />
      <HeaderInfo />
      <OurServices />
      <FAQs/>
      <Carousel />
    </div>
  );
};

export default Home;
