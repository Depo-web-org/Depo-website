import CareerContainer from "./components/CareerContainer";
import NoCareer from "./components/NoCareer";

const careerArray = [
  { title: "Front End Developer", subtitle: "Junior Frontend Developer" },
  { title: "Back End Developer", subtitle: "Junior Backend Developer" },
  { title: "Full Stack Developer", subtitle: "Junior Full Stack Developer" },
  { title: "Data Scientist", subtitle: "Junior Data Scientist" },
  { title: "UI/UX Designer", subtitle: "Junior Designer" },
  { title: "Product Manager", subtitle: "Junior Product Manager" },
];
export default function Career() {
  return (
    <div className=" gradient-bg  px-[54px] md:px[104px] pt-[104px]">
      {careerArray.length === 0 ? (
        <NoCareer />
      ) : (
        <CareerContainer careerArray={careerArray} />
      )}
    </div>
  );
}
