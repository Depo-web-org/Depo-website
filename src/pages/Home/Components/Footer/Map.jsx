import { FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/common/Button";

export default function Map() {
  const mapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=29.982003604232442,31.34399201469942";

  return (
    <div className="col-span-12 md:col-span-3 text-center md:text-left">
      <div className="flex md:justify-center justify-start">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.9776112883212!2d31.34399201469942!3d29.982003604232442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839e1746fccd7%3A0x4b5c140113f1632e!2sVera%20Casa%20Decor!5e0!3m2!1sen!2seg!4v1730981552650!5m2!1sen!2seg"
          width="260"
          height="174"
          className="rounded-md border border-gray-300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        ></iframe>
      </div>
      <div className="flex md:justify-center w-full justify-start mt-4">
        <Button
          title="Get Directions"
          style="w-[260px]"
          onClick={() => window.open(mapsUrl, "_blank")}
          className="h-[36px] gap-[10px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-primary hover:bg-primary-hover text-white font-semibold flex items-center justify-center"
        >
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
