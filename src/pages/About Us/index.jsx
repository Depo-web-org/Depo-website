import { Helmet } from "react-helmet-async";
import PagesBg from "../../components/common/PagesBg";
import About_Depo from "./components/About Depo/About_Depo";
import Card_AboutUs from "./components/Card About/Card";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  useEffect(() => window.scroll(0, 0), []);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("helmet.about.title")}</title>
        <meta name="description" content={t("helmet.about.description")} />
        <meta name="keywords" content={t("helmet.about.keywords")} />
      </Helmet>

      <div className="gradient-bg min-h-screen">
        <PagesBg title="Get to know us better" />
        <section className="w-[calc(100%-32px)] lg:w-[calc(100%-208px)]  mx-auto">
          <About_Depo />
          <Card_AboutUs />
        </section>
      </div>
    </>
  );
}
