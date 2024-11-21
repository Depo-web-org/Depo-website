import { t } from "i18next";
import UseEffectAboutUS from "../../../../Hooks/useEffectAboutUS";

export default function About_Depo() {

  
  // Hook useEffect
  UseEffectAboutUS()

  return (
    <div className="grid grid-cols-12 items-center pt-20 lg:pt-[26px]  ">
      {/* Text About */}
      <div className="col-span-12 md:col-span-8 text-white ">
        <span className="text-[28px] md:text-[34px] font-bold  ">
          {t("AboutUsSection.Title")}
        </span>
        <p className="text-[14px] md:text-[16px] mt-2 md:me-[103px] font-normal ">
          {t("AboutUsSection.Description")}
        </p>
      </div>
      {/* img About */}
      <div className="col-span-12 md:col-span-4 w-full h-[225px]  mt-5 sm:mt-5 md:-mt-0  lg:mb-0">
        <img
          className="w-full sm:w-[438px] h-full rounded-lg "
          src="/images/imgas AboutUs/img AboutUs.webp"
          alt="About Us"
        />
      </div>
    </div>
  );
}
