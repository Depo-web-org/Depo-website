import { FaCopyright } from "react-icons/fa";

export default function Rights() {
  return (
    <div className="relative mt-8 pt-4 text-center text-sm text-white h-[118px]">
      {/* SVG Background */}
      <div className="absolute inset-0">
        <img
          src="public/images/footer/Group 2.svg"
          alt="SVG background"
          className="w-full h-full object-cover " // Adjust opacity as desired
        />
      </div>

      {/* Text Content */}
      <div className="relative flex items-center justify-center h-full gap-2 z-10">
        <FaCopyright className="w-[24px] h-[24px]" />
        <p className="text-left font-semibold text-[14px] leading-[16.94px]">
          2024 Depo Web - All rights reserved
        </p>
      </div>
    </div>
  );
}
