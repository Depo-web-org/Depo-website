import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../common/Button'
import logo from '/images/Logo.webp'

const CenterNav = ({navItems}) => {
  return (
    <>
     <div className="hidden lg:flex  h-full  lg:px-[104px] mx-auto justify-between py-2 px-8   ">
        <div className="h-full  w-1/4 ">
          <div className="flex items-center h-full w-1/4 gap-1 xl:gap-[8px]  ">
            <img
              src={logo}
              alt="Depo Web"
              loading="lazy"
            />
            <div className="w-[50px] h-[49]  p-[10px]">
              <span className="text-secondary font-bold text-[24px] leading-[29.05px] ">
                En
              </span>
            </div>
          </div>
        </div>
        <div className="h-full bg-secondary rounded-[57px] flex flex-1 items-center justify-between px-8">
        {Object.entries(navItems).map(([key, item]) => (
        key !== "contact" ? (
          <NavLink
            key={key}
            to={item.link}
            className="text-white px-2 xl:px-4 py-2 font-bold group relative"
          >
            {item.text}
          </NavLink>
        ) : null
    ) )}

        </div>
        <div className="h-full flex items-center justify-end w-1/4 ">
        <Link to={'contact'}>
          <Button
            title="Contact Us"
            style=" lg:w-40 xl:w-48 h-[51px]  py-[16px]  px-[32px] "
          />
        </Link>
        </div>
      </div>
      
    </>
  )
}

export default React.memo(CenterNav)
