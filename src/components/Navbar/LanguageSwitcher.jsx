import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    document.getElementsByTagName("html")[0].setAttribute("lang", newLang);
    i18n
      .changeLanguage(newLang)
      .catch((err) => console.error("Error switching language:", err));
  };

  return (
    <button
      className="text-secondary  font-bold text-[24px] z-40 leading-[29.05px] "
      onClick={toggleLanguage}
    >
      {i18n.language === "en" ? "En" : "عربي"}
    </button>
  );
}

export default LanguageSwitcher;
