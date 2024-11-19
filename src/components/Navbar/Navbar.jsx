
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
import { useTranslation } from "react-i18next";

const Lang= ()=>{
  const {t} =useTranslation()
    const navItems = {
    home: { text: `${t('navItems.home')}`, icon: <IoHome className="inline" />, link: "/" },
    services: { text: `${t('navItems.services')}`, icon: <GrServices className="inline" />, link: "/services" },
    career: { text: `${t('navItems.career')}`, icon: <FaCode className="inline" />, link: "/career" },
    about: { text: `${t('navItems.about')}`, icon: <IoIosInformationCircle className="inline" />, link: "/about" },
    contact: { text: `${t('navItems.button-nav')}`, icon: <IoMdContact className="inline" />, link: "/contact" }
  };
  return navItems
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const { pathname } = useLocation();
  const scrollPosition = useScrollPosition();  
  const navItems = Lang();
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