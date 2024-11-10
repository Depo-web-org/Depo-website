import { FaCopyright } from "react-icons/fa";

export default function Rights() {
  return (
    <div className="mt-8 pt-4 text-center text-sm h-[118px] text-white relative">
      {/* Text above the SVGs */}
      <div className="absolute bottom-[10%] flex gap-2 left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-10">
        <div>
          {" "}
          <FaCopyright />
        </div>

        <p>2024 Depo Web - All rights reserved</p>
      </div>

      {/* SVGs stacked above each other */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        {/* First SVG */}
        <img src="images/Vector (2).svg" alt="First SVG" className="w-full" />
      </div>

      {/* Second SVG */}
      <div className="absolute -bottom-10 left-0 w-full">
        <img src="images/Vector (3).svg" alt="Second SVG" className="w-full" />
      </div>
    </div>
  );
}
