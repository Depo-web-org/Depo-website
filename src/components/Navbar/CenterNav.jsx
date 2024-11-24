import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../common/Button";
import LanguageSwitcher from "./LanguageSwitcher";

const CenterNav = ({ navItems }) => {
  return (
    <>
      <div className="hidden lg:flex  h-full  lg:px-[104px] mx-auto justify-between py-2 px-8  ">
        <div className="h-full  w-1/4 ">
          <div dir="ltr" className="flex items-center h-full w-1/4 gap-1  ">
          <Link to="/" className="min-w-full ">
            <img src="/images/lOGO.svg" alt="Depo Web"  />
          </Link>
            <div className="w-[50px] h-[49]  ">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        <div className="h-full bg-secondary rounded-[57px] flex flex-1 items-center justify-between px-2 xl:px-8 overflow-hidden ">
          {Object.entries(navItems).map(([key, item]) =>
            key !== "contact" ? (
              <NavLink
                key={key}
                to={item.link}
                className="text-white px-2 xl:px-4 py-2 font-bold group relative"
              >
                {item.text}
              </NavLink>
            ) : null
          )}
        </div>
        <div className="h-full flex items-center justify-end w-1/4 ">
          <Link to={"contact"}>
            <Button
              title={`${navItems.contact.text}`}
              style=" lg:w-40 xl:w-48 h-[51px]  py-[16px]  px-[32px] "
            />
          </Link>
          <div className="bg-red-700"></div>
        </div>
      </div>
    </>
  );
};

export default React.memo(CenterNav);
