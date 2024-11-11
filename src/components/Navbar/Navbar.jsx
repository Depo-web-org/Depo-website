import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../common/Button";
import { useScrollPosition } from "../../Hooks/useScrollPosition";
import { useState } from "react";
import { Divide as Hamburger } from 'hamburger-react'
import { IoHome } from "react-icons/io5";
import './style.css'
import { GrServices } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import Aderss from "../../pages/Home/Components/Footer/Aderss";
import Map from "../../pages/Home/Components/Footer/Map";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const { pathname } = useLocation();

  const scrollPosition = useScrollPosition();
  const navItems = {
    home: { text: "Home", link: "/" },
    services: { text: "Services", link: "/services" },
    about: { text: "Career", link: "/career" },
    contact: { text: "About Us", link: "/about" },
  };
  return (
    <>
    <div
      className={`  bg-${
        scrollPosition > 80 || pathname != "/" ? "white" : "transparent"
      } transition-all duration-300 h-[85px] fixed top-0 w-full z-50 `}
    >
      <div className=" h-full  w-[calc(100%-104px)] mx-auto flex justify-between py-2 px-8   ">
        <div className="h-full  w-1/4 ">
          <div className="flex items-center h-full w-1/4 gap-[8px]">
            <img
              className="w-[96.23px] h-[49.77px]"
              src="/public/images/lOGO.svg"
              alt="unavailable img"
            />
            <div className="w-[50px] h-[49] p-[10px]">
              <span className="text-secondary font-bold text-[24px] leading-[29.05px] ">
                En
              </span>
            </div>
          </div>
        </div>
        <div className="h-full bg-secondary rounded-[57px] w-1/2 flex items-center justify-between px-8">
          {Object.entries(navItems).map(([key, item]) => (
            <NavLink
              key={key}
              to={item.link}
              className="text-white px-4 py-2 font-bold  group relative "
            >
              {" "}
              {item.text}
            </NavLink>
          ))}
        </div>
        <div className="h-full flex items-center justify-center w-1/4">
          {/* <Button title="Contact Us" navigate={'contact'} style="w-48 "/> */}

          <Button
            title="Contact Us"
            navigate={"contact"}
            style="w-48 h-[51px]  py-[16px]  px-[32px] "
          />
        </div>
      </div>







{/* Responsive Navbar */}
      <div>

        <div className="flex lg:hidden items-center  py-2 px-4">

        <div className=" flex-grow ">
        <Hamburger size={20} toggled={isOpen} toggle={setOpen} color={ scrollPosition > 80 || pathname != "/" || isOpen? "#1A4F92" : "white"} />
        </div>

        <div className="w-16">
        <img src="/public/images/lOGO.svg" alt="Depo-Web" />
        </div>
        </div>
      </div>




{/* Menu */}
<div  className={ `min-h-screen w-4/5 bg-white ${isOpen ? "scale-in-hor-left" : "scale-in-Disaper"}   fixed z-20  transition-all duration-[5s]` }>
<div className="mx-2">

  <div className="w-16">
        <img src="/public/images/lOGO.svg" alt="Depo-Web" />
        </div>
        <div className="my-6">
          {Object.entries(navItems).map(([key, item]) => (
              <div key={key} className="py-2 ">
            <Link
              to={item.link}
              className="text-primary font-bold  group relative "
            >
              <span className="text-xl">{item.icon}</span> {item.text}
            </Link>
            </div>
          ))}
        </div>
        {/* Address*/}
        <div>
          <Aderss/>
        </div>
        <div className="my-4">
        <Map />

        </div>
</div>


</div>  
    
    </div>
     
  </>
};

export default Navbar;