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
      img: "https://s3-alpha-sig.figma.com/img/7b43/04eb/6aed9811f718fa541a3f77df20fd2545?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f5qwyVWY~NILcS5nBuyEjr2Q-3s4JngxXPthdz1z7CXbPD0RymAf-szpH2lb7sQchoN1mZp45JS~gOj~0okNuVMvbeBJhfGI3041gmx1rnIQ1rOVVTcfMCQmwqz1hUUyPKSAIlP48Ma~5jTdsvYQxN~sYijbAN~zd31MLnuqzMY1rEDQ-W-77KD-zDo3P6S5YjZ402OceYL5i77R7JxhtCp3oddpA6CKhadbmQ-9ZgKbIiG3CgSwuPqub~oACtXwLybFW0gtlGxqVwKemkWgJeOXO25lHRIEvB7uuNIZN-orLbJAxTuRmLhYdJoatykTvwz1I5hpIx-P93R0-Gcogg_",
      des: `${t("portfolio.Delivendor.description")}`,
      textClick: `${t("portfolio.Delivendor.textClick")}`,
      videoUrl: "https://depowebeg.com/assets/videos/DELIVENDOR.mp4",
    },
    {
      name: "The Faster",
      img: "https://s3-alpha-sig.figma.com/img/6e6c/1275/4dd1f35bbebebef81a0f1521811acdf8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lps-mXvCJq2nJ5lFIpRPuqCne8E0DKex4-fchy0A9l82frkpsHN~7Rpqxnz2FcqvpABNvHD069ZCOjXNVhhHJ0npdpBUTcFw2VhyVmZuFG~QSzsM45ArbDueqMquGKumEVy3GUjhpbwwxk8A14nQyFPIV8ZMnegQukltvxghQg1vmw4igyWPD91Je7ET5m9CQZUDGle1ZcrPJ78L~ffg3i4rRNgcSLJmnp~iTh7tU2M-3firv~b9TfpdK02hrOeY-RozROFrHw~egm~wcIGBVjhK-owFTM558aYnd9~CToG8wcgPQJyOEd2b8VlIi42OmnDEF0L~XLVo81W1IIttRQ__",
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