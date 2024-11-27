import { Helmet } from "react-helmet-async";
import PagesBg from "../../components/common/PagesBg";
import VideoCard from "./Components/cards portfolio/videoCard";
import Title from "./Components/Title";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  const cardInfo = [
    {
      name: "Delivendor",
      img: "/images/Portfolio/Delivendor.webp",
      des: `${t("portfolio.Delivendor.description")}`,
      textClick: `${t("portfolio.Delivendor.textClick")}`,
      videoUrl: "https://depowebeg.com/assets/videos/DELIVENDOR.mp4",
    },
    {
      name: "The Faster",
      img: "/images/Portfolio/Faster.webp",
      des: `${t("portfolio.TheFaster.description")}`,
      textClick: `${t("portfolio.TheFaster.textClick")}`,
      videoUrl: "https://depowebeg.com/assets/videos/The_Faster.mp4",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("helmet.portfolio.title")}</title>
        <meta name="description" content={t("helmet.portfolio.description")} />
        <meta name="keywords" content={t("helmet.portfolio.keywords")} />
      </Helmet>

      <PagesBg title={`${t("portfolio.Our portfolio")}`} />

      <div className=" gradient-bg min-h-screen px-4 lg:px-[104px] pt-20 lg:pt-0 ">
        <Title
          title={`${t("portfolio.Title page")}`}
          description={`${t("portfolio.description page")}`}
        />

        {/* cards */}
        <div className="grid grid-cols-12 gap-6 pb-6 ">
          <VideoCard card={cardInfo} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;