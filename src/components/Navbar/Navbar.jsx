import { useLocation } from "react-router-dom";
import { useScrollPosition } from "../../Hooks/useScrollPosition";
import { IoHome } from "react-icons/io5";
import './style.css'
import { GrServices } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { IoIosInformationCircle, IoMdContact } from "react-icons/io";
import ResponsiveNav from "./ResponsiveNav";
import { useState } from "react";
import CenterNav from "./CenterNav";

const navItems = {
  home: { text: "Home",icon:<IoHome className="inline"/> ,link: "/" },
  services: { text: "Services",icon:<GrServices className="inline"/> ,link: "/services" },
  career: { text: "Career",icon:<FaCode className="inline"/> ,link: "/career" },
  about: { text: "About Us",icon:<IoIosInformationCircle className="inline" /> ,link: "/about" },
  contact: { text: "Contact Us",icon:<IoMdContact className="inline" /> ,link: "/contact" },
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const { pathname } = useLocation();
  const scrollPosition = useScrollPosition();  

  return <> 
    <nav
      className={`  bg-${
        scrollPosition > 80 || pathname != "/" || isOpen ? "white" : "transparent"
      } transition-all duration-300 h-auto md:h-[85px] fixed top-0 w-full z-50  `}
    >
{/*  Navbar in lg*/}
      <CenterNav navItems={navItems}/>

{/* Responsive Navbar in mobile and tablet  */}

<ResponsiveNav isOpen={isOpen} scrollPosition={scrollPosition} setOpen={setOpen} pathname={pathname} navItems={navItems} />
    </nav>
     
  </>
};

export default Navbar;