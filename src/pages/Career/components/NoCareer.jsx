import { useTranslation } from "react-i18next";

export default function NoCareer() {
  const { t } = useTranslation();

  return (
    <div className="py-24  lg:py-0">
      <div>
        <p className="font-[Inter] pb-10   text-[16px] md:text-[32px] font-bold leading-[38.73px] text-center text-white">
          {t("no-career.header-title")}
        </p>
      </div>
      <div className="flex items-center  md:pt-0 justify-center -mt-[50px] relative z-20">
        <img
          src="images/career/Feeling sorry-bro.svg"
          className="w-full md:w-2/3"
          alt="no-career"
        />
      </div>
    </div>
  );
}
