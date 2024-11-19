import { FaCopyright } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Rights() {
  const { t } = useTranslation();

  return (
    <div className="relative mt-8 pt-4 text-center text-sm text-white h-[118px]">
      <div className="absolute inset-0">
        <img
          src="images/footer/Group 2.svg"
          alt="SVG background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative flex items-center justify-center h-full gap-2 z-10">
        <FaCopyright className="w-[24px] h-[24px]" />
        <p className="text-left font-semibold text-[14px] leading-[16.94px]">
          {t("footer.rights-title")}
        </p>
      </div>
    </div>
  );
}
