import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Aderss() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-2">
      <h3 className="font-semibold text-lg mb-4">Address</h3>
      <div className="flex items-start space-x-2 mb-2">
        <div>
          <FaMapMarkerAlt className="text-primary h-5 w-5" />
        </div>

        <span>
          Zahraa Al Maadi, Sama Towers, Building No. 9, 9th Floor, Apartment No.
          93
        </span>
      </div>
      <div className="flex items-center space-x-2 mb-2">
        <div>
          <FaPhoneAlt className="text-primary h-5 w-5" />
        </div>

        <span>+20 1500919948</span>
      </div>
      <div className="flex items-center space-x-2">
        <div>
          <SiGmail className="text-primary h-5 w-5" />
        </div>

        <span>depoweb.eg@gmail.com</span>
      </div>
    </div>
  );
}
