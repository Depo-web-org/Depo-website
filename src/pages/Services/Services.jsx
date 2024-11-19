import { Helmet } from "react-helmet-async";
import PagesBg from "../../components/common/PagesBg";
import ServicesContainer from "./components/ServicesContainer";
import Summary from "./components/Summary";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  useEffect(() => window.scroll(0, 0), []);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("helmet.services.title")}</title>
        <meta name="description" content={t("helmet.services.description")} />
        <meta name="keywords" content={t("helmet.services.keywords")} />
      </Helmet>

      <PagesBg title={t("services.title")} />
      <div className="min-h-screen gradient-bg px-4 pt-20 lg:pt-0 md:px-[104px] ">
        <Summary />
        <ServicesContainer />
      </div>
    </>
  );
}
