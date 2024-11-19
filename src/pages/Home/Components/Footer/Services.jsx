import { FaMobileScreen, FaGamepad, FaDatabase } from "react-icons/fa6";
import { BiCodeAlt } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-2">
      <h3 className="font-semibold text-lg mb-4">
        {t("footer.services-title")}
      </h3>
      <ul className="space-y-2">
        <li>
          <div className="flex items-start space-x-2">
            <div className="text-primary h-[19px] pt-1 w-[19px]">
              <BiCodeAlt className="min-w-[19px] min-h-[19px]" />
            </div>
            <span>{t("footer.services-web")}</span>
          </div>
        </li>
        <li>
          <div className="flex items-start space-x-2">
            <div className="text-primary">
              <FaMobileScreen className="min-w-[19px] min-h-[19px]" />
            </div>
            <span>{t("footer.services-apps")}</span>
          </div>
        </li>
        <li>
          <div className="flex items-start space-x-2">
            <div className="text-primary pt-1">
              <FaGamepad className="min-w-[23px] min-h-[15px]" />
            </div>
            <span>{t("footer.services-games")}</span>
          </div>
        </li>
        <li>
          <div className="flex items-start space-x-2">
            <div className="text-primary pt-1">
              <FaDatabase className="min-w-[19px] min-h-[19px]" />
            </div>
            <span>{t("footer.services-database")}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
