<<<<<<< HEAD
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import Button from "../common/Button";

const Navbar = () => {
  const navItems = {
    home: { text: "Home", link: "/" },
    about: { text: "About", link: "/about" },
    services: { text: "Services", link: "/services" },
    contact: { text: "Contact", link: "/contact" },
  };
  return (
    <div className="bg-white h-[85px] fixed w-full z-50 ">
      <div className=" h-full  w-[calc(100%-104px)] mx-auto flex justify-between py-2 px-8   ">
        <div className="h-full  w-1/4 ">
          <div className="flex items-center h-full w-1/4 gap-[8px]">
            <img
              className="w-[96.23px] h-[49.77px]"
              src="public/images/lOGO.svg"
              alt="unavailable img"
            />
            <div className="w-[50px] h-[49] p-[10px]">
              <span className="text-secondary font-bold text-[24px] leading-[29.05px] ">
                En
              </span>
=======
=======
>>>>>>> og-1
import {  NavLink, useLocation } from "react-router-dom"
import Button from "../common/Button"
import { useScrollPosition } from "../../Hooks/useScrollPosition"

const Navbar = () => {
    const navItems={
        home:{text:'Home',link:'/'},
        about:{text:'About',link:'/about'},
        services:{text:'Services',link:'/services'},
        contact:{text:'Contact',link:'/contact'}
    }
  return (
    <div className="bg-white h-[85px] fixed w-full z-50 ">
        <div className=" h-full  w-[calc(100%-104px)] mx-auto flex justify-between py-2 px-8   ">
            <div className="h-full  w-1/4 ">

            <div className="flex items-center h-full w-1/4 gap-[8px]">
              
              <img className="w-[96.23px] h-[49.77px]" src="lOGO.svg" alt="unavailable img"/>
              <div className="w-[50px] h-[49] p-[10px]">
              <span className="text-secondary font-bold text-[24px] leading-[29.05px] ">En</span>
              </div>

           </div> 

            </div> 
            <div className="h-full bg-secondary rounded-[57px] w-1/2 flex items-center justify-between px-8">
                {
                    Object.entries(navItems).map(([key, item]) => (
                        <NavLink key={key} to={item.link} className="text-white px-4 py-2 font-bold  group relative "> {item.text} 
                        </NavLink> ))
                }
            </div>
            <div className="h-full flex items-center justify-center w-1/4">
<<<<<<< HEAD
            {/* <Button title="Contact Us" navigate={'contact'} style="w-48 "/> */}

            <Button title="Contact Us" navigate={'contact'} style="w-48 h-[51px]  py-[16px]  px-[32px] "/>
>>>>>>> bf448897bfb3482e4741e545e7770dca3aa89e3f
=======
            <Button style="w-[116px] h-[51px]  pt-[16px] pb-[16px] pl-[32px] pr-[32px]"/>
>>>>>>> og-1
            </div>
        </div>
      </div>
    </div>
    
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
export default Navbar;
=======
export default Navbar





>>>>>>> bf448897bfb3482e4741e545e7770dca3aa89e3f
=======
export default Navbar
>>>>>>> og-1
