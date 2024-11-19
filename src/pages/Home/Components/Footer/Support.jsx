import { IoMdContact } from "react-icons/io";
import { FaQuestionCircle, FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Support() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleScrollToFAQs = () => {
    navigate("/");
    setTimeout(() => {
      const faqSection = document.getElementById("FAQs");
      if (faqSection) faqSection.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-2">
      <h3 className="font-semibold text-lg mb-4">
        {t("footer.support-title")}
      </h3>
      <ul className="space-y-4">
        <li>
          <Link
            to="/about"
            className="hover:text-secondary transition-colors duration-300"
          >
            <div className="flex items-center space-x-2">
              <div className="text-primary flex justify-center items-center ">
                <FaInfoCircle className="min-w-[19px] min-h-[19px]" />
              </div>
              <span>{t("footer.support-about")}</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-secondary transition-colors duration-300"
          >
            <div className="flex items-center space-x-2">
              <div className="text-primary flex justify-center items-center ">
                <IoMdContact className="min-w-[19px] min-h-[19px]" />
              </div>
              <span>{t("footer.support-contact")}</span>
            </div>
          </Link>
        </li>
        <li>
          <button
            onClick={handleScrollToFAQs}
            className="hover:text-secondary transition-colors duration-300"
          >
            <div className="flex items-center space-x-2">
              <div className="text-primary flex justify-center items-center ">
                <FaQuestionCircle className="min-w-[19px] min-h-[19px]" />
              </div>
              <span>{t("footer.support-faq")}</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}
