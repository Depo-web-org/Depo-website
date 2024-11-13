import { Helmet } from "react-helmet-async";
import Carousel from "./Components/Carousel/Carousel";
import FAQs from "./Components/FAQs/FAQs";
import HeaderInfo from "./Components/Header Info/HeaderInfo";
import Hero from "./Components/Hero/Hero";
import OurServices from "./Components/OurServices/OurServices";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <Helmet>
        <title>Depo Web | Transforming Ideas into Digital Solutions</title>
        <meta
          name="description"
          content="Depo Web specializes in innovative website and application development with a focus on achieving top-tier SEO. Our expert team delivers impactful, scalable solutions to drive your business growth."
        />
        <meta
          name="keywords"
          content="Depo Web, digital solutions, website development, SEO, scalable applications"
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
