import PagesBg from "../../components/common/PagesBg"
import Title from "./Components/Title"

const Portfolio = () => {
  let desc='Our team is actively engaged in delivering these projects. Check back for progress updates as we work toward successful outcomes.'
  return (
    <>
   

      <PagesBg title={'Our portfolio'} />

      <div className=" gradient-bg min-h-screen px-[54px] md:px-[104px] pt-[40px] " >
       <Title title={"Projects Underway"} description={desc}/>
       <div className="grid grid-cols-12 ">
      
       </div>
      </div>
      
    </>
  )
}

export default Portfolio
