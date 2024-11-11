import { useEffect } from "react"
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom"
import Aderss from "../../pages/Home/Components/Footer/Aderss"
import Map from "../../pages/Home/Components/Footer/Map"

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
<img src="/public/images/lOGO.svg" alt="Depo-Web" />
</div>
</div>
</div>




{/* Menu */}
<div id="menuPhone"  className={ `min-h-screen lg:hidden w-4/5 bg-white ${isOpen ? "scale-in-hor-left" : "scale-in-Disaper"}   fixed z-20  ` }>
<div className="mx-2">

<div className="w-16">
<img src="/public/images/lOGO.svg" alt="Depo-Web" />
</div>
<div className="my-6">
  {Object.entries(navItems).map(([key, item]) => (
      <div key={key} className="py-2 ">
    <Link
      to={item.link}
      onClick={()=> setOpen(!isOpen)  }
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
      
    </>
  )
}

export default ResponsiveNav
