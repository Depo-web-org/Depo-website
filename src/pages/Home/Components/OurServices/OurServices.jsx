import Flickity from 'flickity';
import 'flickity/css/flickity.css'
import './service.css'
import { useEffect, useRef } from 'react';
import { FaCode, FaPenFancy } from 'react-icons/fa';
import { CiMobile2 } from 'react-icons/ci';
import { TbDeviceDesktopAnalytics, TbDeviceGamepad2 } from 'react-icons/tb';
import { MdOutlineDesignServices } from 'react-icons/md';
import { SiVitest } from 'react-icons/si';
const OurServices = () => {
    const carouselRef = useRef(null);
    const servicesItems = {
      Graphic:{text:'Graphic Design',Icon:<FaPenFancy />},
      FrontEND:{text:'Front End Development',Icon:<FaCode />},
      Game:{text:'Game Design',Icon:<TbDeviceGamepad2 />},
      Accounting:{text:'Accounting and Financial analysis systems',Icon:<TbDeviceDesktopAnalytics />},
      UIUX:{text:'UI/UX Design',Icon:<MdOutlineDesignServices />},
        Testing:{text:'Software Testing',Icon:<SiVitest />},
        Mobile:{text:'Mobile App Development',Icon: <CiMobile2 />},
    }
    useEffect(() => {
      const flkty = new Flickity(carouselRef.current, {
        freeScroll: true,
contain: true,
prevNextButtons: false,
pageDots: false
      });
  
      return () => {
        flkty.destroy(); 
      };
    }, []);
  //
  return (
    
    <section className='section-border  '>
         <h2 className="text-white font-bold text-2xl   text-start lg:text-center lg:text-[32px]  pb-6 lg:mt-8 lg:pb-16">
     Our Services
       
        </h2>
  <div className="carousel " ref={carouselRef}>
    {
        Object.entries(servicesItems).map(([key, item]) => <div key={key} className="carousel-cell hover:bg-white transition-all duration-150 group mx-2 lg:mx-5 bg-secondary text-white  font-bold w-40 lg:w-96 h-32 lg:h-[270px] leading-10 rounded-[10px] flex items-center justify-center flex-col ">
          <p className=' text-2xl lg:text-6xl group-hover:text-primary transition-all duration-500'>
            {item.Icon}
          </p>
            <p className='text-center lg:mx-10 text-base lg:text-4xl group-hover:text-primary transition-all duration-500' >
        {item.text} 
            </p>
          </div>     
        ) 
    }
    </div>
    <p className="hidden lg:block lg:mb-8 text-center text-white font-semibold lg:text-base  text-sm mt-4 z-10  relative"> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-white mr-1 inline mb-1 rotate-hand text-lg rotate" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m19.98 16.82-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59L5 17.62l.83-.84c.24-.24.58-.35.92-.28l3.25.74V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.39 1.21 1.22 1.09 2.07zM12 2.5c4.74 0 7.67 2.52 8.43 4.5H22c-.73-2.88-4.51-6-10-6-3.22 0-6.18 1.13-8.5 3.02V2H2v5h5V5.5H4.09c2.12-1.86 4.88-3 7.91-3z"></path></svg> Swipe to see all services</p>
    </section>
  
)
}

export default OurServices
