import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Address() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-2">
      <h3 className="font-semibold text-lg mb-4">Address</h3>

      <div className="flex items-start gap-x-2 mb-2">
        <FaMapMarkerAlt className="text-primary w-6 h-6" />
        <span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/dir/?api=1&destination=29.982003604232442,31.34399201469942"
            className="hover:text-secondary transition-colors duration-300"
          >
            Zahraa Al Maadi, Sama Towers, Building No. 9, 9th Floor, Apartment
            No. 93
          </a>
        </span>
      </div>

      <div className="flex items-center gap-x-2 mb-2">
        <FaPhoneAlt className="text-primary h-5 w-5" />
        <span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+201500919948"
            className="hover:text-secondary transition-colors duration-300"
          >
            +20 1500919948
          </a>
        </span>
      </div>

      <div className="flex items-center gap-x-2">
        <SiGmail className="text-primary h-5 w-5" />
        <span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:depoweb.eg@gmail.com"
            className="hover:text-secondary transition-colors duration-300"
          >
            depoweb.eg@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}
