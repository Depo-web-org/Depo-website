import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import { useTranslation } from "react-i18next";

export default function Summary() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center md:pt-[32px] pb-[32px] md:pb-[16px] text-white container">
      <div className="w-[502px] h-[154px] flex flex-col justify-start items-start">
        <p className="font-inter text-2xl md:text-[32px] font-bold leading-[38.73px] ">
          {t("services.header-title")}
        </p>

        <p className="font-inter text-lg italic font-normal leading-[24.2px] ">
          {t("services.header-content")}
        </p>

        <div className="py-[16px]">
          <Link to={"/contact"}>
            <Button
              style="h-[51px] text-[15px]"
              title={t("services.button-title")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
