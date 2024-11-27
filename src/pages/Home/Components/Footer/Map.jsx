import { FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/common/Button";
import { useTranslation } from "react-i18next";

export default function Map() {
  const { t } = useTranslation();
  const mapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=29.982003604232442,31.34399201469942";

  return (
    <div className="col-span-12 md:col-span-3 overflow-hidden text-center md:text-left">
      <div className="flex justify-start lg:justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d215.99470629242253!2d31.34467531627808!3d29.981864072490247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458390055a597b1%3A0xff05c7cd5d38e9a1!2sDepo%20web%20company!5e0!3m2!1sen!2seg!4v1732719967379!5m2!1sen!2seg"
          width="260"
          height="174"
          className="rounded-md border mb-4 border-gray-300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        ></iframe>
      </div>
      <div className=" flex justify-start lg:justify-center">
        <Button
          title={t("footer.map-button")}
          style="w-[260px]"
          onClick={() => window.open(mapsUrl, "_blank")}
          className="h-[36px] gap-[10px] rounded-tl-[5px]  rounded-tr-none rounded-br-none rounded-bl-none bg-primary hover:bg-primary-hover text-white font-semibold flex items-center justify-center "
        >
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
