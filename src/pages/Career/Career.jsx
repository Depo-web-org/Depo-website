import { Helmet } from "react-helmet-async";
import PagesBg from "../../components/common/PagesBg";
import CareerContainer from "./components/CareerContainer";
import NoCareer from "./components/NoCareer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const careerArray = [
  // { title: "Front End Developer", subtitle: "Junior Frontend Developer" },
  // { title: "Back End Developer", subtitle: "Junior Backend Developer" },
  // { title: "Full Stack Developer", subtitle: "Junior Full Stack Developer" },
  // { title: "Data Scientist", subtitle: "Junior Data Scientist" },
  // { title: "UI/UX Designer", subtitle: "Junior Designer" },
  // { title: "Product Manager", subtitle: "Junior Product Manager" },
];
export default function Career() {
  useEffect(() => window.scroll(0, 0), []);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("helmet.career.title")}</title>
        <meta name="description" content={t("helmet.career.description")} />
        <meta name="keywords" content={t("helmet.career.keywords")} />
      </Helmet>

      <PagesBg title={t("career.title")} />

      <div className=" gradient-bg min-h-screen px-[54px] md:px-[104px] pt-[40px]">
        {careerArray.length === 0 ? (
          <NoCareer />
        ) : (
          <CareerContainer careerArray={careerArray} />
        )}
      </div>
    </>
  );
}
