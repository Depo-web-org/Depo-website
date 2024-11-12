import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../common/Button'

const CenterNav = ({navItems}) => {
  return (
    <>
     <div className="hidden lg:flex  h-full  w-[calc(100%-104px)] mx-auto justify-between py-2 px-8   ">
        <div className="h-full  w-1/4 ">
          <div className="flex items-center h-full w-1/4 gap-[8px]">
            <img
              className="w-[96.23px] h-[49.77px]"
              src="/images/lOGO.svg"
              alt="Depo Web"
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
        key !== "contact" ? (
          <NavLink
            key={key}
            to={item.link}
            className="text-white px-4 py-2 font-bold group relative"
          >
            {item.text}
          </NavLink>
        ) : null
    ) )}

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
      
    </>
  )
}

export default React.memo(CenterNav)
