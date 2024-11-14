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
      className="fixed inset-0 flex items-center pt-20  justify-center bg-black bg-opacity-50 z-40 md:pt-6 sm:pt-28"
      onClick={handleOverlayClick}
    >
      <div className="gradient-bg shadow-lg text-white w-full max-w-[90%] md:max-w-[814px] h-full max-h-[90%] md:h-[730px] rounded-[18px] p-4 md:p-6 overflow-hidden">
        <div className="flex flex-col w-full h-full">
          <Header onClose={onClose} />
          <div className="flex flex-col w-full h-full overflow-y-auto scrollbar-hide">
            <Description />
            <Responsibilities />
            <Qualifications />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ onClose }) {
  return (
    <div className="flex flex-col md:flex-row w-full mb-4">
      <div className="flex flex-col gap-1 w-full md:w-1/2">
        <p className="text-left text-[20px] md:text-[24px] font-semibold leading-tight md:leading-[29.05px]">
          {jobData.title}
        </p>
        <p className="text-left text-[18px] md:text-[24px] font-normal italic leading-tight md:leading-[29.05px]">
          {jobData.level}
        </p>
      </div>
      <div className="flex items-center justify-end gap-2 mt-2 md:mt-0 w-full md:w-1/2">
        <Button
          style="h-[45px] w-[120px] md:h-[51px] md:w-[168px]"
          title="Cancel"
          onClick={onClose}
        />
        <Button
          title="Apply Now"
          style="border-2 h-[45px] w-[120px] md:h-[51px] md:w-[168px] bg-transparent border-secondary"
        />
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="flex flex-col w-full py-2 md:py-4">
      <p className="text-left text-[18px] md:text-[20px] font-medium leading-[24px] md:leading-[24.2px]">
        Description:
      </p>
      <p className="text-left text-[14px] md:text-[16px] font-normal pt-2 md:pt-4 leading-[20px] md:leading-[24.21px]">
        {jobData.description}
      </p>
    </div>
  );
}

function Responsibilities() {
  return (
    <div className="flex flex-col w-full py-2 md:py-4">
      <p className="text-left text-[18px] md:text-[20px] font-medium leading-[24px] md:leading-[24.2px]">
        Responsibilities:
      </p>
      <ul className="list-disc pl-5 md:pl-8 text-left text-[14px] md:text-[16px] font-normal pt-2 md:pt-4 leading-[20px] md:leading-[32.03px]">
        {jobData.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Qualifications() {
  return (
    <div className="flex flex-col w-full py-2 md:py-4">
      <p className="text-left text-[18px] md:text-[20px] font-medium leading-[24px] md:leading-[24.2px]">
        Qualifications:
      </p>
      <ul className="list-disc pl-5 md:pl-8 text-left text-[14px] md:text-[16px] font-normal pt-2 md:pt-4 leading-[20px] md:leading-[32.03px]">
        {jobData.qualifications.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
