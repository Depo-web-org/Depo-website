import { IoMdContact } from "react-icons/io";
import { FaQuestionCircle, FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Support() {
  const navigate = useNavigate();

  const handleScrollToFAQs = () => {
    navigate("/");
    setTimeout(() => {
      const faqSection = document.getElementById("FAQs");
      if (faqSection) faqSection.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-2">
      <h3 className="font-semibold text-lg mb-4">Support</h3>
      <ul className="space-y-4">
        <li>
          <Link to="/about" className="hover:text-secondary">
            <div className="flex items-center space-x-2">
              <div className="text-primary flex justify-center items-center h-5 w-5">
                <FaInfoCircle />
              </div>
              <span>About Us</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-secondary">
            <div className="flex items-center space-x-2">
              <div className="text-primary flex justify-center items-center h-5 w-5">
                <IoMdContact />
              </div>
              <span>Contact Us</span>
            </div>
          </Link>
        </li>
        <li>
          <button onClick={handleScrollToFAQs} className="hover:text-secondary">
            <div className="flex items-center space-x-2">
              <div className="text-primary flex justify-center items-center h-5 w-5">
                <FaQuestionCircle />
              </div>
              <span>FAQs</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}
