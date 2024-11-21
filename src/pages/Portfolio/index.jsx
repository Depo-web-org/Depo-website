import PagesBg from "../../components/common/PagesBg";
import VideoCard from "./Components/cards portfolio/videoCard";
import Title from "./Components/Title";

const Portfolio = () => {
  let desc =
    "Our team is actively engaged in delivering these projects. Check back for progress updates as we work toward successful outcomes.";
  return (
    <>
      <PagesBg title={"Our portfolio"} />

      <div className=" gradient-bg min-h-screen px-4 lg:px-[104px] pt-20 lg:pt-0 ">
        <Title title={"Projects Underway"} description={desc} />

        {/* cards */}
        <div className="grid grid-cols-12  gap-6 pb-6    ">
          <VideoCard />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
