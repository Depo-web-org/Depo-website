import Button from "../../../components/common/Button";
const jobData = {
  title: "Front End Developer",
  level: "Junior",
  description:
    "We are looking for a creative and detail-oriented Frontend Developer to join our team! In this role, you’ll collaborate with designers, backend developers, and other team members to build and maintain engaging, responsive, and user-friendly web applications. Your primary focus will be on implementing visual elements that users interact with, ensuring high performance and compatibility across different devices and browsers.",
  responsibilities: [
    "Develop user interfaces using HTML, CSS, JavaScript, and modern frontend frameworks (e.g., React, Angular, Vue.js).",
    "Work closely with designers to translate UI/UX wireframes into high-quality code.",
    "Ensure the technical feasibility of UI/UX designs.",
    "Optimize applications for maximum speed and scalability.",
    "Maintain code quality and ensure best practices in frontend development.",
    "Collaborate with backend developers to integrate APIs and ensure seamless functionality.",
  ],
  qualifications: [
    "Proven experience in frontend development (2+ years preferred).",
    "Proficiency in HTML, CSS, and JavaScript, with experience in frontend frameworks like React, Angular, or Vue.js.",
    "Understanding of responsive design principles and cross-browser compatibility.",
    "Familiarity with version control tools, such as Git.",
    "Strong problem-solving skills and attention to detail.",
    "Excellent communication and teamwork skills.",
  ],
};

export default function CareerModal({ onClose }) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 pt-28 flex z-40 items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="gradient-bg shadow-lg text-white w-2/3 md:w-[814px] h-[830px] rounded-[18px] p-[18px] opacity-100 relative">
        <div className="flex flex-col w-full h-full">
          <div className="flex w-full mb-4">
            <div className="flex flex-col gap-[4px] w-1/2">
              <p className="text-left text-[24px] text-white font-semibold leading-[29.05px]">
                {jobData.title}
              </p>
              <p className="text-left text-[24px] text-white font-normal italic leading-[29.05px]">
                {jobData.level}
              </p>
            </div>
            <div className="flex items-center justify-end gap-2 w-1/2">
              <Button
                style="h-[51px] w-[168px]"
                title="Cancel"
                onClick={onClose}
              />
              <Button
                title="Apply Now"
                style="border-2 h-[51px] w-[168px] bg-transparent border-secondary"
              />
            </div>
          </div>

          <div className="flex flex-col w-full h-full overflow-y-auto scrollbar-hide">
            <div className="flex flex-col w-full py-[18px]">
              <p className="text-left text-[20px] font-medium leading-[24.2px]">
                Description:
              </p>
              <p className="text-left text-[16px] font-normal pt-[16px] leading-[24.21px]">
                {jobData.description}
              </p>
            </div>

            <div className="flex flex-col w-full py-[18px]">
              <p className="text-left text-[20px] font-medium leading-[24.2px]">
                Responsibilities:
              </p>
              <ul className="list-disc pl-[20px] text-left text-[16px] font-normal pt-[16px] leading-[32.03px]">
                {jobData.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col w-full py-[18px]">
              <p className="text-left text-[20px] font-medium leading-[24.2px]">
                Qualifications:
              </p>
              <ul className="list-disc pl-[20px] text-left text-[16px] font-normal pt-[16px] leading-[32.03px]">
                {jobData.qualifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
