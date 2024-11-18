import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === "en" ? "Switch to Arabic" : "Switch to English"}
    </button>
  );
}

export default LanguageSwitcher;
