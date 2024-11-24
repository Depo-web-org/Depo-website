import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import VideoModal from "../video/VideoModal";

export default function VideoCard({ card }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {card.map((item, index) => (
        <>
          <div
            key={index}
            className="mx-auto w-full col-span-12 sm:col-span-5 lg:col-span-4  "
            onClick={() => setIsModalOpen(true)}
          >
            <div className="bg-white rounded-lg relative group overflow-hidden shadow-xl ">
              {/* Img Container */}
              <div className=" p-2 relative flex justify-center items-center  transition-all duration-1000 lg:group-hover:p-0">
                <img
                  src={item.img}
                  alt="img card"
                  className="rounded-lg  w-full  object-cover transition-all duration-1000 lg:group-hover:rounded-none"
                />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content Container */}
              <div className="z-30 flex items-center p-2">
                <h3 className="text-gray-800 text-base sm:base  md:text-lg xl:text-2xl  leading-[29.05px] font-bold ">
                  {item.name}
                </h3>

                <div className="flex flex-1 justify-end   lg:justify-start  lg:group-hover:justify-end  lg:flex-none lg:group-hover:flex-1 transition-all duration-[1000ms] ">
                  <FaPlay
                    className=" text-xl lg:text-2xl mr-2 lg:ms-2 text-secondary transition-transform duration-[1000ms] ease-in-out 
                   lg:group-hover:translate-x-[calc(200%-10%)] lg:group-hover:rotate-180"
                  />
                </div>

                <span className="relative lg:end-14 text-gray-700  font-semibold lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  {item.textClick}
                </span>
              </div>

              <div className="relative max-h-72 lg:max-h-0 transition-all duration-1000 ease-in-out lg:group-hover:max-h-72">
                {/* Title and Icon */}

                {/* Description with slow reveal animation */}
                <div className="relative overflow-hidden group pb-2 ">
                  <p className="text-gray-700 text-sm md:text-base leading-[19.36px] font-medium px-2 transform translate-y-0 transition-all duration-1000 ease-in-out">
                    {item.des}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <VideoModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            videoUrl={item.videoUrl}
          />
        </>
      ))}
    </>
  );
}
