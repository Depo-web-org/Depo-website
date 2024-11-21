import PagesBg from "../../components/common/PagesBg";
import Allcard from "./Components/cards portfolio/Allcard";
import Title from "./Components/Title";

const Portfolio = () => {
  let desc =
    "Our team is actively engaged in delivering these projects. Check back for progress updates as we work toward successful outcomes.";
  return (
    <>
      <PagesBg title={"Our portfolio"} />

      <div className=" gradient-bg min-h-screen px-4  md:px-[104px] pt-[40px] ">
        <Title title={"Projects Underway"} description={desc} />

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-1  md:gap-6 ">
          <Allcard />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
