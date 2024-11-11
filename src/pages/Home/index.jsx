import Carousel from "./Components/Carousel/Carousel";
import FAQs from "./Components/FAQs/FAQs";
import HeaderInfo from "./Components/Header Info/HeaderInfo";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/OurServices/Services";

const Home = () => {
  return (
    <div className="min-h-screen gradient-bg px-8 lg:px-[104px]">
      <Hero />
      <HeaderInfo />
      <Services />
      <FAQs/>
      <Carousel />
    </div>
  );
};

export default Home;
