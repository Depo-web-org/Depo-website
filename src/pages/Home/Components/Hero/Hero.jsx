import Button from "../../../../components/common/Button"
import './animationHero.css'
import { ImLink } from "react-icons/im"
const Hero = () => {
  return (
    <>
    <main className=" w-full h-full lg:pt-[85px] relative">
     
     <div className="lg:mt-[calc(149px-85px)]   grid grid-cols-12 pb-8 lg:border-b lg:border-[#ffffff47] relative z-10">
      {/* left side */}
      <div className=" col-span-12 lg:col-span-6 xl:col-span-7     ">
        {/* text-start sm:text-center md:text-start  */}
  <h1 className="text-4xl sm:text-6xl leading-10  md:leading-[65px]  lg:leading-[77.45px] font-bold text-white pt-20  ">
      Innovative <span className="text-secondary">Digital <br /> Solutions</span> Tailored to <br />  
      Your Needs
      </h1>
      {/* text-start sm:text-center md:text-start */}
      <h2 className="text-base  lg:text-2xl font-semibold text-white mt-4 leading-5 lg:leading-7 xl:mr-32">
      Leading the way in custom software and app development to enhance business efficiency and productivity
      </h2>
      {/* flex sm:justify-center md:text-start */}
      <div className=" mt-4 lg:mt-16 ">
      <Button navigate='services' backgroundColor={"bg-primary"} icon=<ImLink className="text-2xl"/> title={"Services"} style="w-44 lg:w-[293px]"/>
      {/* <FaLink /> icon needed to add  */}
      </div>
      </div>


      {/* right side */}
      <div className="hidden lg:col-span-6 xl:col-span-5  overflow-hidden   lg:flex justify-center items-center flex-col ">
        
        {/* top Photos */}
{/* 1- */}
        <div className="flex gap-x-5 ">
           <div className=" slide-in-top w-[188px] h-[358px] overflow-hidden rounded-t-full  rounded-r-[153px] rounded-b-full rounded-l-[153px]  ">
          <img className="object-cover h-full w-full rounded-b-full" src="/images/Hero Section/monileApp.webp" alt="Mobile Application" />
        </div>
{/* 2- */}

        <div className="slide-in-right w-[189px] h-[196px] overflow-hidden rounded-t-full rounded-r-full rounded-b-full rounded-l-full  rounded-tr-none rounded-tl-full">
          <img className=" w-full h-full object-cover  " src="/images/Hero Section/flutter.webp" alt="Flutter Mobile Application" />
        </div>
        </div> 

        {/* bottom Photos */}
        <div className="flex gap-x-5">
{/* 1- */}

        <div className="slide-in-left  mt-10 w-[189px] h-[196px] overflow-hidden rounded-t-full rounded-r-full rounded-b-full rounded-l-full  rounded-tr-none rounded-tl-full">
          <img className=" w-full h-full object-cover  " src="/images/Hero Section/React.webp" alt="React Web Application" />
        </div>
{/* 2- */}

        <div className="slide-in-bottom -mt-32  w-[188px] h-[358px] overflow-hidden rounded-t-full  rounded-r-[153px] rounded-b-full rounded-l-[153px]  ">
          <img className="object-cover h-full w-full  rounded-b-full" src="/images/Hero Section/webdev.webp" alt="Web Application" />
        </div>
      
        </div> 

      </div>
    

    
     </div>
    </main>
    
    
    
    </>
  )
}

export default Hero