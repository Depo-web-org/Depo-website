import "./FQAs.css";
import { HiArrowCircleDown } from "react-icons/hi";
export default function FAQs() {
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
      <div className="w-full h-auto my-[32px] text-white ">
        <div className="flex flex-col items-center">
          <h2 className="h-[39px] text-center text-[32px] font-bold mb-[64px] ">
            FAQs
          </h2>
        </div>

        {AllFAQs.map((item) => {
          return (
            <div key={item.id} className="mx-auto m-[16px] grid w-full ">
              <div className="color_details rounded-tl-xl rounded-br-xl overflow-hidden">
                <details className="group p-3 w-full">
                  <summary className="h-[30px] flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="h-[29px] w-full sm:w-[460px]">
                      {item.name}
                    </span>
                    <span className="transition group-open:rotate-180">
                    <HiArrowCircleDown className="w-[26px] h-[26px] text-secondary"/>
                    </span>
                  </summary>
                  <p className="group-open:transition-all group-open:duration-1000 group-open:transform group-open:translate-y-0 opacity-0 translate-y-16 group-open:opacity-100">
                    {item.dec}
                  </p>
                </details>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="section-border" />
    </>
  );
}
