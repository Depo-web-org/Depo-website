import { IoMdContact } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
export default function Support() {
  return (
    <div className="col-span-12 md:col-span-2">
      <h3 className="font-semibold text-lg mb-4">Support</h3>
      <ul className="space-y-4">
        <li>
          <a href="#" className="hover:text-teal-300">
            {" "}
            <p className="flex items-start space-x-2">
              <div className="text-primary h-[19px] pt-1 w-[14px]">
                <FaInfoCircle />{" "}
              </div>

              <span>About Us</span>
            </p>
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-teal-300">
            {" "}
            <p className="flex items-start space-x-2">
              <div className="text-primary h-[19px] pt-1 w-[14px]">
                <IoMdContact />{" "}
              </div>

              <span>Contact Us</span>
            </p>
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-teal-300">
            {" "}
            <p className="flex items-start space-x-2">
              <div className="text-primary h-[19px] pt-1 w-[14px]">
                <FaQuestionCircle />{" "}
              </div>

              <span>FAQS</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
}
