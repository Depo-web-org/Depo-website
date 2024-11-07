import {  NavLink } from "react-router-dom"

const Navbar = () => {
    const navItems={
        home:{text:'Home',link:'/'},
        about:{text:'About',link:'/about'},
        services:{text:'Services',link:'/services'},
        contact:{text:'Contact',link:'/contact'}
    }
  return (
    <div className="bg-white h-[85px] fixed w-full ">
        <div className=" h-full  w-[calc(100%-104px)] mx-auto flex justify-between px-2 py-4   ">
            <div className="h-full  w-1/4 ">

            </div> 
            <div className="h-full bg-secondary rounded-[57px] w-1/2 flex items-center justify-between px-8">
                {
                    Object.entries(navItems).map(([key, item]) => (
                        <NavLink key={key} to={item.link} className="text-white px-4 py-2 font-bold  group relative "> {item.text} 
                        <div  className={`bg-primary h-[2px] w-0 group-hover:w-full transition-all duration-200 absolute -bottom-[1.2px] left-1/2 -translate-x-1/2`}></div>
                        </NavLink> ))
                }
            </div>
            <div className="h-full  w-1/4">

            </div>
        </div>
       
    </div>
    
  )
}

export default Navbar
