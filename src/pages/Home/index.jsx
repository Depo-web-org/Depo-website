import { Helmet } from "react-helmet-async";
import Carousel from "./Components/Carousel/Carousel";
import FAQs from "./Components/FAQs/FAQs";
import HeaderInfo from "./Components/Header Info/HeaderInfo";
import Hero from "./Components/Hero/Hero";
import OurServices from "./Components/OurServices/OurServices";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


const Home = () => {
  useEffect(() => window.scroll(0, 0), []);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("helmet.home.title")}</title>
        <meta name="description" content={t("helmet.home.description")} />
        <meta name="keywords" content={t("helmet.home.keywords")} />
      </Helmet>

      <main className="min-h-screen gradient-bg px-4 lg:px-[104px]">
        <Hero />
        <HeaderInfo />
        <OurServices />
        <FAQs />
        <Carousel />
      </main>
    </>
  );
};

export default Home;
