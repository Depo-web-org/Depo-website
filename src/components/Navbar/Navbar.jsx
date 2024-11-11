import { NavLink, useLocation } from "react-router-dom";
import Button from "../common/Button";
import { useScrollPosition } from "../../Hooks/useScrollPosition";
import { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import './style.css'
import { GrServices } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import ResponsiveNav from "./ResponsiveNav";

const navItems = {
  home: { text: "Home",icon:<IoHome className="inline"/> ,link: "/" },
  services: { text: "Services",icon:<GrServices className="inline"/> ,link: "/services" },
  about: { text: "Career",icon:<FaCode className="inline"/> ,link: "/career" },
  contact: { text: "About Us",icon:<IoIosInformationCircle className="inline" /> ,link: "/about" },
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const { pathname } = useLocation();
  const scrollPosition = useScrollPosition(); 

 useEffect(() => {
    document.querySelector('#menuPhone').classList.remove("scale-in-Disaper")
    document.querySelector('#menuPhone').classList.add("-left-full")
  },[])
 

  return <> 
    <div
      className={`  bg-${
        scrollPosition > 80 || pathname != "/" || isOpen ? "white" : "transparent"
      } transition-all duration-300 h-auto md:h-[85px] fixed top-0 w-full z-50  `}
    >
      <div className="hidden lg:flex  h-full  w-[calc(100%-104px)] mx-auto justify-between py-2 px-8   ">
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
<ResponsiveNav isOpen={isOpen} scrollPosition={scrollPosition} setOpen={setOpen} pathname={pathname} navItems={navItems} />
    </div>
     
  </>
};

export default Navbar;