import { Helmet } from "react-helmet-async";
import PagesBg from "../../components/common/PagesBg";
import CareerContainer from "./components/CareerContainer";
import NoCareer from "./components/NoCareer";

const careerArray = [
  // { title: "Front End Developer", subtitle: "Junior Frontend Developer" },
  // { title: "Back End Developer", subtitle: "Junior Backend Developer" },
  // { title: "Full Stack Developer", subtitle: "Junior Full Stack Developer" },
  // { title: "Data Scientist", subtitle: "Junior Data Scientist" },
  // { title: "UI/UX Designer", subtitle: "Junior Designer" },
  // { title: "Product Manager", subtitle: "Junior Product Manager" },
];
export default function Career() {
  return (
    <>
      <Helmet>
        <title>Careers</title>
        <meta
          name="description"
          content="Looking for a career in software development? Join Depo web's team, where we provide opportunities for growth and development alongside top technical talents."
        />
      </Helmet>

      <PagesBg title="Join Our Team" />

      <div className=" gradient-bg h-screen px-[54px] md:px[104px] pt-[40px]">
        {careerArray.length === 0 ? (
          <NoCareer />
        ) : (
          <CareerContainer careerArray={careerArray} />
        )}
      </div>
    </>
  );
}