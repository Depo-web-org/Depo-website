import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function UseEffectAboutUS() {
  const { i18n } = useTranslation();
  useEffect(() => {}, [i18n.language]);
  return  ;
}
 