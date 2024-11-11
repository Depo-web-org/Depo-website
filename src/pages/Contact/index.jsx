import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import FormContact from "./Components/FormContact";
import { SiGmail } from "react-icons/si";
import PagesBg from "../../components/common/PagesBg";

const Contact = () => {

  return (
    <section className="gradient-bg min-h-screen ">
      {/* Header Back Ground */}
  <PagesBg title="Got a Question?"/>
      <div className="pt-28 lg:pt-9 px-4 lg:px-[104px] grid grid-cols-12 pb-32">
        {/* Left Side */}

        <div className=" col-span-12 lg:col-span-7    lg:border-r lg:border-white">
          <div className="text-white">
                  <h3 className=" font-bold text-[32px]">
            Need Help ?
          </h3>
          <p className="text-xl italic">
          Fill out the form and we will do all we can to help you
          </p>
          </div>

      {/* form */}
      <FormContact/>  

        </div>


        {/* Right Side */}
      <div className="col-span-12 lg:col-span-5 lg:ml-10 xl:ml-14 my-14 lg:my-0 hidden lg:block ">
      <div className="text-white">

                  <h3 className=" font-bold text-[32px]">
                  For Direct inquiries 
          </h3>
          <p className="text-xl italic">
          Feel free to contact us through the following
          </p>
          </div>
          <div className="flex flex-col mt-6 gap-y-10 text-white text-xl ">
          <div> 
            <p className="flex items-center gap-x-2"><span className="text-3xl"> <FaPhoneAlt className="text-secondary"/></span>+20 123456789</p>
          </div>
          <div>
            <p className="flex items-center gap-x-2"><span className="text-3xl"> <SiGmail className="text-secondary"/></span>depoweb.eg@gmail.com</p>

          </div>
          <div>
            <p className="flex items-center gap-x-2"> <span className="text-3xl"><IoLocationSharp className="text-secondary"/></span>Zahraa Al Maadi, Sama Towers, Building No. 9, 9th Floor, Apartment No. 93</p>
          </div>
        </div>
     
      </div>
     
      </div>
      
    </section>
  )
}

export default Contact
