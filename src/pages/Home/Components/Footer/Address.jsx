import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Address() {
  const { t } = useTranslation();

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-2">
      <h3 className="font-semibold text-lg mb-4">
        {t("footer.address-title")}
      </h3>

      <div className="flex items-start gap-x-2 mb-2">
        <FaMapMarkerAlt className="text-primary min-w-[14px] min-h-[19px]" />
        <span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/dir/?api=1&destination=29.982003604232442,31.34399201469942"
            className="hover:text-secondary hover:underline transition-colors duration-300"
          >
            {t("footer.address-content")}
          </a>
        </span>
      </div>

      <div className="flex items-center gap-x-2 mb-2">
        <FaPhoneAlt className="text-primary min-w-[14px] min-h-[19px]" />
        <div dir="ltr" className="flex flex-col items-center ">
          <a
            target="_blank"
            className="hover:text-secondary transition-all hover:underline duration-300"
            href="tel:+20 1500919948"
          >
            +20 1500919948
          </a>
          <a
            target="_blank"
            className="hover:text-secondary transition-all hover:underline duration-300"
            href="tel:+20 1500721994"
          >
            +20 1500721994
          </a>
          <a
            target="_blank"
            className="hover:text-secondary transition-all hover:underline duration-300"
            href="tel:+20 1508199424"
          >
            +20 1508199424
          </a>
          <a
            target="_blank"
            className="hover:text-secondary transition-all hover:underline duration-300 -ml-3"
            href="tel:+20 1501111994 "
          >
            +20 1501111994
          </a>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <SiGmail className="text-primary min-w-[14px] min-h-[12px]" />
        <span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:info@depowebeg.com"
            className="hover:text-secondary hover:underline transition-colors duration-300"
          >
            info@depowebeg.com
          </a>
        </span>
      </div>
    </div>
  );
}
