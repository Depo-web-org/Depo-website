import { Helmet } from "react-helmet-async";
import PagesBg from "../../components/common/PagesBg";
import CareerContainer from "./components/CareerContainer";
import NoCareer from "./components/NoCareer";
import { useEffect } from "react";

const careerArray = [
  // { title: "Front End Developer", subtitle: "Junior Frontend Developer" },
  // { title: "Back End Developer", subtitle: "Junior Backend Developer" },
  // { title: "Full Stack Developer", subtitle: "Junior Full Stack Developer" },
  // { title: "Data Scientist", subtitle: "Junior Data Scientist" },
  // { title: "UI/UX Designer", subtitle: "Junior Designer" },
  // { title: "Product Manager", subtitle: "Junior Product Manager" },
];
export default function Career() {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <Helmet>
        <title>Careers at Depo Web | Join Our Innovative Team</title>
        <meta
          name="description"
          content="Explore career opportunities at Depo Web, where you can work with a team of skilled developers and creative thinkers to build impactful digital solutions."
        />
        <meta
          name="keywords"
          content="Depo Web careers, join our team, digital development jobs, innovation, skilled developers"
        />
      </Helmet>

      <PagesBg title="Join Our Team" />

      <div className=" gradient-bg min-h-screen px-[54px] md:px-[104px] pt-[40px]">
        {careerArray.length === 0 ? (
          <NoCareer />
        ) : (
          <CareerContainer careerArray={careerArray} />
        )}
      </div>
    </>
  );
}
