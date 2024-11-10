import { IoMdContact } from "react-icons/io";
import { FaQuestionCircle, FaInfoCircle } from "react-icons/fa";

export default function Support() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-2">
      <h3 className="font-semibold text-lg mb-4">Support</h3>
      <ul className="space-y-4">
        <li>
          <a href="#" className="hover:text-teal-300">
            <div className="flex items-start space-x-2">
              <div className="text-primary h-5 w-5">
                <FaInfoCircle />
              </div>
              <span>About Us</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-teal-300">
            <div className="flex items-start space-x-2">
              <div className="text-primary h-5 w-5">
                <IoMdContact />
              </div>
              <span>Contact Us</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-teal-300">
            <div className="flex items-start space-x-2">
              <div className="text-primary h-5 w-5">
                <FaQuestionCircle />
              </div>
              <span>FAQs</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
