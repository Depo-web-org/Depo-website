// import Button from "../../components/common/Button"
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoLocationSharp } from "react-icons/io5";
// import { useForm } from 'react-hook-form';
import FormContact from "./Components/FormContact";

const Contact = () => {
  // const { register, handleSubmit ,formState: { errors } } = useForm();

  // const onSubmit = data => console.log(data);
  
  return (
    <section className="gradient-bg min-h-screen ">
      <div className="mt-[85px] bg-white w-full h-40">

      </div>
      <div className="pt-9 px-[104px] grid grid-cols-12 pb-32">
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
      <div className="col-span-12 lg:col-span-5 lg:mx-14 my-14 lg:my-0 ">
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
            {/* <FaPhoneAlt className="text-secondary"/>  */}
            <p><span> +20 123456789</span></p>
          </div>
          <div>
            {/* <SiGmail className="text-secondary"/> */}
            <p>Email: <span>depoweb.eg@gmail.com</span></p>
          </div>
          <div>
            {/* <IoLocationSharp className="text-secondary"/> */}
            <p> <span>Zahraa Al Maadi, Sama Towers, Building No. 9, 9th Floor, Apartment No. 93</span></p>
          </div>
        </div>
     
      </div>
     
      </div>
      
    </section>
  )
}

export default Contact
