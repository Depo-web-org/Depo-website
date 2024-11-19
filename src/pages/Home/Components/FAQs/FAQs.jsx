import { useState } from "react";
import "./FQAs.css";
import { HiArrowCircleDown } from "react-icons/hi";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function FAQs() {
  const [showText, setshowText] = useState(null);
  const { i18n } = useTranslation();

  const AllFAQs = [
    {
      id: "ddd",
      name: t("FAQsSection.Questions.0.question"),
      dec: t("FAQsSection.Questions.0.answer"),
    },
    {
      id: "ffff",
      name: t("FAQsSection.Questions.1.question"),
      dec: t("FAQsSection.Questions.1.answer"),
    },
    {
      id: "www",
      name: t("FAQsSection.Questions.2.question"),
      dec: t("FAQsSection.Questions.2.answer"),
    },
  ];
  return (
    <>
      <div
        id="FAQs"
        className="h-auto w-full md:my-[32px] text-white tracking-wide"
      >
        <div className="flex flex-col lg:items-center">
          <h2 className="h-[39px] text-[25px] lg:text-[32px] font-bold mb-[-8px] lg:mb-[64px]">
            {t("FAQsSection.Title")}
          </h2>
        </div>
        {AllFAQs.map((item, index) => {
          return (
            <div key={index} className="mx-auto w-full m-[16px]">
              <div className="color_details rounded-tl-xl rounded-br-xl overflow-hidden">
                {/* Accordion Item */}
                <div className="relative transition-all duration-700">
                  <div
                    className="w-full px-2 pt-2 text-left cursor-pointer"
                    onClick={() => {
                      setshowText(showText === index ? null : index);
                    }}
                  >
                    {/* Text Item */}
                    <div className="flex items-center justify-between h-auto cursor-pointer font-medium">
                      
                        <span className={`${i18n.language === "ar" ? "text-right" : ""} tracking-wide h-auto w-full font-semibold leading-[29.05px] sm:w-auto text-[13px] sm:text-[20px] md:text-[24px]`}>
                          {item.name}
                        </span>
                    
                       
                      <HiArrowCircleDown
                        className={`w-[26px] h-[26px] text-secondary transition-all duration-700 ${
                          showText === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  {/* dec Item */}
                  <div
                    className={`transition-all duration-[1000ms] ease-in-out px-2 m-1 md:m-2 text-[11px] md:text-[16px] font-normal ${
                      showText === index ? "max-h-screen" : "max-h-0"
                    } overflow-hidden`}
                  >
                    {item.dec}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="section-border" />
    </>
  );
}
