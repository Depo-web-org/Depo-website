import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Aderss() {
  return (
    <div className="col-span-12 md:col-span-2">
      <h3 className="font-semibold text-lg mb-4">Address</h3>
      <p className="flex items-start space-x-2">
        <div className="text-primary h-[19px] pt-1 w-[14px]">
          <FaMapMarkerAlt />{" "}
        </div>

        <span>
          Zahraa Al Maadi, Sama Towers, Building No. 9, 9th Floor, Apartment No.
          93
        </span>
      </p>
      <p className="flex items-center space-x-2 mt-2">
        <div className="text-primary h-[19px] w-[14px]">
          <FaPhoneAlt />{" "}
        </div>

        <span>+20 1500919948</span>
      </p>
      <p className="flex items-center space-x-2 mt-2">
        <div className="text-primary h-[19px] w-[14px]">
          <SiGmail />{" "}
        </div>

        <span>depoweb.eg@gmail.com</span>
      </p>
    </div>
  );
}
