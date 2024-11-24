import { Link } from "react-router-dom"
import Button from "../../../../components/common/Button"
import './animationHero.css'
import { ImLink } from "react-icons/im"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
const Hero = () => {
  const { t , i18n } = useTranslation();


  // to resolve problem of animation work in language change 
  useEffect(() => {
    const elements = document.querySelectorAll('.slide-in-top, .slide-in-right, .slide-in-left, .slide-in-bottom');
    elements.forEach((element) => {
      element.classList.replace('slide-in-bottom', 'temp-class-bottom') 
      element.classList.replace('slide-in-top', 'temp-class')
      void element.offsetWidth 
      element.classList.replace('temp-class-bottom', 'slide-in-bottom')
      element.classList.replace('temp-class', 'slide-in-top')
    })
  }, [i18n.language])
  
  return (
    <>
    <main className=" w-full h-full lg:pt-[85px] relative">
     
     <div className="lg:mt-[calc(149px-85px)] gap-y-8  grid grid-cols-12 pb-8 lg:border-b lg:border-[#ffffff47] relative z-10">
      {/* left side */}
      <div className=" col-span-12 lg:col-span-6 xl:col-span-7     ">
        {/* text-start sm:text-center md:text-start  */}
  <h1 className="text-4xl sm:text-6xl leading-10  md:leading-[65px]  lg:leading-[77.45px] font-bold text-white pt-20  ">
  {t('Hero.h1-partOne')}  <span className="text-secondary">{t('Hero.span-One')} <br />{t('Hero.span-Two')}</span> <br />  
  {t('Hero.h1-partTwo')}
      </h1>
      {/* text-start sm:text-center md:text-start */}
      <h2 className={`text-base  lg:text-2xl font-semibold text-white mt-4 leading-5 lg:leading-7  ${i18n.language==='en'&& 'xl:mr-32'}`}>
      {t('Hero.h2')}
      </h2>
      {/* flex sm:justify-center md:text-start */}
      <div className=" mt-4 lg:mt-16 ">
        <Link to={'services'} className=" inline-block w-auto">
      <Button  backgroundColor={"bg-primary"} icon=<ImLink className="text-2xl"/> title={t('Hero.button-Home')} style="w-44 lg:w-[293px]"/>
        </Link>
      {/* <FaLink /> icon needed to add  */}
      </div>
      </div>


      {/* right side */}
      <div className=" col-span-12 lg:col-span-6 xl:col-span-5  overflow-hidden   flex justify-center items-center flex-col  ">
        
        {/* top Photos */}
{/* 1- */}
        <div className="flex gap-x-5 ">
           <div className="  slide-in-top w-[121px] lg:w-[188px] h-[229px] lg:h-[358px] overflow-hidden rounded-t-full  rounded-r-[153px] rounded-b-full rounded-l-[153px]  ">
          <img className=" object-cover h-full w-full rounded-b-full" src="/images/Hero Section/Next-js.webp" alt="Next Web Application" />
        </div>
{/* 2- */}

        <div className=" slide-in-right w-[121px] lg:w-[189px] h-[125px] lg:h-[196px] overflow-hidden rounded-t-full rounded-r-full rounded-b-full rounded-l-full  rounded-tr-none rounded-tl-full">
          <img className="  w-full h-full object-cover  " src="/images/Hero Section/flutter.webp" alt="Flutter Mobile Application" />
        </div>
        </div> 

        {/* bottom Photos */}
        <div className="flex gap-x-5">
{/* 1- */}

        <div className=" slide-in-left  mt-5 lg:mt-10 w-[121px] lg:w-[189px] h-[125px] lg:h-[196px] overflow-hidden rounded-t-full rounded-r-full rounded-b-full rounded-l-full  rounded-bl-none rounded-br-full">
          <img className="  w-full h-full object-cover  " src="/images/Hero Section/React.webp" alt="React Web Application" />
        </div>
{/* 2- */}

        <div className=" slide-in-bottom -mt-20 lg:-mt-32 w-[121px] lg:w-[188px] h-[229px] lg:h-[358px] overflow-hidden rounded-t-full  rounded-r-[153px] rounded-b-full rounded-l-[153px]  ">
          <img className=" object-cover h-full w-full  rounded-b-full" src="/images/Hero Section/Python.webp" alt="Python logo" />
        </div>
      
        </div> 

      </div>
    

    
     </div>
    </main>
    
    
    
    </>
  )
}

export default Hero