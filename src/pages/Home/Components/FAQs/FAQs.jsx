import { useState } from "react";
import "./FQAs.css";
import { HiArrowCircleDown } from "react-icons/hi";
export default function FAQs() {
  const [showText, setshowText] = useState(null);

  const AllFAQs = [
    {
      id: "ddd",
      name: "What services does Depo web provide?",
      dec: "Depo web offers a wide range of digital development and programming services, including custom website design, mobile app development, e-commerce solutions, digital marketing, and software consulting. We aim to deliver solutions tailored to meet the unique needs of each client .",
    },
    {
      id: "ffff",
      name: "How long  it takes to complete a project?",
      dec: "Project timelines vary based on the complexity and specific requirements. Typically, smaller projects may take a few weeks, while larger or more complex solutions might take several months. After an initial consultation, we provide an estimated timeline that aligns with your goals and deadlines. ",
    },
    {
      id: "xzgfdsx",
      name: "How can I contact customer support?",
      dec: "You can reach our support team through our Contact Us page, by phone, or by email. We’re here to answer questions, provide updates, and offer assistance as needed. We strive to respond to all inquiries within 24 hours during business days.",
    },
  ];

  return (
    <>
      <div
        id="FAQs"
        className="h-auto w-full md:my-[32px] text-white tracking-wide"
      >
        <div className="flex flex-col lg:items-center">
          <h2 className="h-[39px] text-[25px] lg:text-[32px] font-bold mb-[-8px] lg:mb-[64px]">
            FAQs
          </h2>
        </div>
        {AllFAQs.map((item, index) => {
          return (
            <div key={index} className="mx-auto w-full m-[16px]">
              <div className="color_details rounded-tl-xl rounded-br-xl overflow-hidden">
                {/* Accordion Item */}
                <div className="relative transition-all duration-700">
                  <div
                    className="w-full px-2 pt-2 text-left cursor-pointer"
                    onClick={() => {
                      setshowText(showText === index ? null : index);
                    }}
                  >
                    <div className="flex items-center justify-between h-auto cursor-pointer font-medium">
                      <span className="tracking-wide h-auto w-full font-semibold leading-[29.05px] sm:w-auto text-[13px] sm:text-[20px] md:text-[24px]">
                        {item.name}
                      </span>
                      <HiArrowCircleDown
                        className={`w-[26px] h-[26px] text-secondary transition-all duration-700 ${
                          showText === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-[1000ms] ease-in-out mb-2 px-2 md:mt-2 text-[11px] md:text-[16px] font-normal ${
                      showText === index ? "max-h-screen" : "max-h-0"
                    } overflow-hidden`}
                  >
                    {item.dec}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="section-border" />
    </>
  );
}
