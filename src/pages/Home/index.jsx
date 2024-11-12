import { Helmet } from "react-helmet-async";
import Carousel from "./Components/Carousel/Carousel";
import FAQs from "./Components/FAQs/FAQs";
import HeaderInfo from "./Components/Header Info/HeaderInfo";
import Hero from "./Components/Hero/Hero";
import OurServices from "./Components/OurServices/OurServices";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to Depo web a leader in delivering custom software solutions tailored to your needs. Explore our services and join our success journey."
        /> 
      </Helmet>

      <div className="min-h-screen gradient-bg px-4 lg:px-[104px]">
        <Hero />
        <HeaderInfo />
        <OurServices />
        <FAQs />
        <Carousel />
      </div>
    </>
  );
};

export default Home;
