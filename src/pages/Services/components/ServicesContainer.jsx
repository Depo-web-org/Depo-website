import { useTranslation } from "react-i18next";
import ServiceItem from "./ServiceItem";

export default function ServicesContainer() {
  const { t } = useTranslation();

  // Add translation keys directly to the servicesData array
  const servicesData = [
    {
      titleKey: "services.web-title",
      description: t("services.web-content"),
      image: "images/services/web.webp",
    },
    {
      titleKey: "services.application-title",
      description: t("services.application-content"),
      image: "images/services/application.webp",
    },
    {
      titleKey: "services.website-title",
      description: t("services.website-content"),
      image: "images/services/website.webp",
    },
    {
      titleKey: "services.games-title",
      description: t("services.games-content"),
      image: "images/services/game.webp",
    },
    {
      titleKey: "services.financial-title",
      description: t("services.financial-content"),
      image: "images/services/financial.webp",
    },
    {
      titleKey: "services.database-title",
      description: t("services.database-content"),
      image: "images/services/database.webp",
    },
    {
      titleKey: "services.consulting-title",
      description: t("services.consulting-content"),
      image: "images/services/consulting.webp",
    },
    {
      titleKey: "services.marketing-title",
      description: t("services.marketing-content"),
      image: "images/services/markting.webp",
    },
    {
      titleKey: "services.career-title",
      description: t("services.career-content"),
      image: "images/services/career.webp",
    },
    {
      titleKey: "services.saas-title",
      description: t("services.saas-content"),
      image: "images/services/sass.webp",
    },
    {
      titleKey: "services.ux-title",
      description: t("services.ux-content"),
      image: "images/services/user.webp",
    },
  ];

  return (
    <div className="grid grid-cols-12 pt-2 sm:gap-3  md:gap-[20px]">
      {servicesData.map((service) => (
        <div
          key={service.titleKey}
          className="col-span-12 sm:col-span-6 md:col-span-4  py-4 xl:col-span-3"
        >
          <ServiceItem
            title={t(service.titleKey)} // Dynamically translate the title
            description={service.description}
            image={service.image}
          />
        </div>
      ))}
    </div>
  );
}
