import Button from "../../../../components/common/Button"
import './animationHero.css'
import { ImLink } from "react-icons/im"
const Hero = () => {
  return (
    <>
    <main className=" w-full h-full pt-[85px] relative">
     
     <div className="mt-[calc(149px-85px)]   grid grid-cols-12 pb-8 lg:border-b lg:border-[#ffffff47] relative z-10">
      {/* left side */}
      <div className=" col-span-12 lg:col-span-7  lg:pr-[130px]  xl:pr-40">
  <h1 className="text-[32px] lg:text-[64px] leading-10  lg:leading-[77.45px] font-bold text-white mt-20 ">
      Innovative <span className="text-secondary">Digital Solutions</span> Tailored to Your Needs
      </h1>
      <h2 className="text-base lg:text-2xl font-medium text-white mt-4 leading-5 lg:leading-7">
      Leading the way in custom software and app development to enhance business efficiency and productivity
      </h2>
      <div className=" mt-4 lg:mt-16">
      <Button navigate='services' backgroundColor={"bg-primary"} icon=<ImLink className="text-2xl"/> title={"Services"} style="w-44 lg:w-[293px]"/>
      {/* <FaLink /> icon needed to add  */}
      </div>
      </div>


      {/* right side */}
      <div className="hidden lg:col-span-5  overflow-hidden   lg:flex justify-center items-center flex-col ">
        {/* top Photos */}
{/* 1- */}
        <div className="flex gap-x-5">
           <div className=" slide-in-top w-[188px] h-[358px] overflow-hidden rounded-t-full  rounded-r-[153px] rounded-b-full rounded-l-[153px]  ">
          <img className="object-cover h-full w-full rounded-b-full" src="https://s3-alpha-sig.figma.com/img/4c35/01f7/16e791a94b19af4a763bb637eb19277a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jntHUo~884kTsmugJe0~87ABkSCeLlTBQBPqzAZp4ucAMcuCOR2HRKG0FKEJ5FgXPOSonnXn-o6IBAtvzm9TF3nlbE54kLBVA8s2-H8-bCE8N9~2PRS7u~njK3-ovpY-al6JmXlBcTYjMBt5o3RpDsZO6DCq0eu2BX9vc-w3xiotbYdogbj~1eodmNkRnybq1RFclEyUAWVuJ2bDwbBPaBJpGWMjCE1jQhXEKkUbTLTEGjkReUzBOA7JVQ7rt2kCl5PNRl3fhpvYg91xTlZCuh5hXLL9Fl7~L3UYJacynZAY6Nmi7OZX9y2WLCIOJem3HhiedOGp1SswG6s5U-RgpA__" alt="Our Team Mobile Application" />
        </div>
{/* 2- */}

        <div className="slide-in-right w-[189px] h-[196px] overflow-hidden rounded-t-full rounded-r-full rounded-b-full rounded-l-full  rounded-tr-none rounded-tl-full">
          <img className=" w-full h-full object-cover  " src="https://s3-alpha-sig.figma.com/img/5e60/bac3/188a997ed875dc6010fd38fb24ce9246?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SDZCvinwIl0MO2SmLW-790UeOf9yfO7I44l2buW4wjT5oWfHJET5d2K98zVEH-~Nt8LAHWziWymgPi7Bdxd8pP8ADwMfL5yPnXBk9~2ljRy9~eG~yzyJr9AOazFXWVSumNhuN5AF8T~CiSAeyZJqgK0DZ4c9gujkos7zWYuKAxvdgElZ4Pye4WjrhPuLFArpHju3cCc5LzVpdzPPLqe~ZqCJMDM6Jgjz-Cd5~2KRBlKWaRiwnrRpb7lDdSlopgY4~8m~aJK4ndR8um0DdMtOW5fcIGmgGSiW~QgjLjN6UCVVdBaki7ihmmjz127HuCzilF9vX6OI9nP5b5GniXHZWw__" alt="Flutter Mobile Application" />
        </div>
        </div> 

        {/* bottom Photos */}
        <div className="flex gap-x-5">
{/* 1- */}

        <div className="slide-in-left  mt-10 w-[189px] h-[196px] overflow-hidden rounded-t-full rounded-r-full rounded-b-full rounded-l-full  rounded-tr-none rounded-tl-full">
          <img className=" w-full h-full object-cover  " src="https://s3-alpha-sig.figma.com/img/1a0c/e8f3/d825de7164402f3ac4abcb618f766907?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5Acywwhvp3g6d3kxJxae1FndHj2K8aQjAn38ro58rE0tapE6sEuLNFXdi8JgFv5yRDq6geJWkyfYlXOzS9UyTUa51AtY8LsDxcxrbrFQNeJAFxIxKdaU~NIaG03IsR7Mu3QGrg9uJae~a18FvG1SNa6ZzBbKLcgcfUB21VKtCr8-ooouQs9uJvqPgIZJV~TXphwNIkGvWPpXQHaiZ2ggZEuCLjsc7OdyUbban8VvGWNj~jexp-kbUql2KNi8iIL5oMH5~Ybh1K3bcNct2vmnGyWVlYjwboy5ZSl9BbOC2csx7igAWjB65gnafv8QM1gP7JDEaxCEYSqELv9govZfA__" alt="React Web Application" />
        </div>
{/* 2- */}

        <div className="slide-in-bottom -mt-32  w-[188px] h-[358px] overflow-hidden rounded-t-full  rounded-r-[153px] rounded-b-full rounded-l-[153px]  ">
          <img className="object-cover h-full w-full  rounded-b-full" src="https://www.figma.com/file/eY2bddfzVejFsCC3tMLoDS/image/5387b92e7497de52a57454f1c624c9fe142e24d8" alt="Web Application" />
        </div>
      
        </div> 

      </div>
    

    
     </div>
    </main>
    
    
    
    </>
  )
}

export default Hero