import React, { useEffect } from "react"
import { Divide as Hamburger } from 'hamburger-react'
import {  NavLink } from "react-router-dom"
import Aderss from "../../pages/Home/Components/Footer/Aderss"
import Map from "../../pages/Home/Components/Footer/Map"
import logo from '/images/Logo.webp'

const ResponsiveNav = ({isOpen,scrollPosition,pathname,setOpen , navItems}) => {

    useEffect(() => {
        document.querySelector('#menuPhone').classList.remove("scale-in-Disaper")
        document.querySelector('#menuPhone').classList.add("-left-full")
      },[])
    
  return (
    <>
      <div>

<div className="flex lg:hidden items-center  justify-between py-2 px-4 ">

<div  className="  -ml-2">
<Hamburger size={20} toggled={isOpen} toggle={setOpen} color={ scrollPosition > 80 || pathname != "/" || isOpen? "#1A4F92" : "white"} />
</div>

<div className="w-16">
<img src={logo} alt="Depo-Web" />
</div>
</div>
      </div>




{/* Menu */}
<div id="menuPhone"  className={ `h-screen pt-2 overflow-y-auto scrollbar-hide lg:hidden w-4/5 bg-white ${isOpen ? "scale-in-hor-left" : "scale-in-Disaper"}   fixed z-20  ` }>
<div className="mx-2">

<div className="w-16">
<img src="/images/lOGO.svg" alt="Depo-Web" />
</div>
<div className="py-6">
  {Object.entries(navItems).map(([key, item]) => (
      <div key={key} className="py-2 ">
    <NavLink
      to={item.link}
      onClick={()=> setOpen(!isOpen)  }
      className="text-primary font-bold  group relative "
    >
      <span className="text-xl">{item.icon}</span> {item.text}
    </NavLink>
    </div>
  ))}
</div>
{/* Address*/}
<div className="pb-6 ">
  <Aderss/>
</div>
<div className="pb-20 ">
<Map />

</div>
</div>


</div> 
{/* Click to close Navbar */}
{
  isOpen&&<div onClick={()=> setOpen(!isOpen)} className="absolute min-h-screen w-full bg-transparent"></div>
}

      
    </>
  )
}

export default  React.memo(ResponsiveNav);
