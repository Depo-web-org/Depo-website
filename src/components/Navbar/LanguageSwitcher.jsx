import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();


  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
   // change in Html 
     document.documentElement.setAttribute("lang", newLanguage);
     document.documentElement.setAttribute("dir", newLanguage === "ar" ? "rtl" : "ltr");
   // change in i18n Lang
     i18n.changeLanguage(newLanguage)
     .then(() => localStorage.setItem("language", newLanguage))
 };

  return (
    <button
      className="text-secondary  font-bold text-[24px] z-40 leading-[29.05px] "
      onClick={toggleLanguage}
    >
      {i18n.language === "en" ?  "ع" :"En"}
    </button>
  );
}

export default React.memo(LanguageSwitcher);
