import { FaPlay } from "react-icons/fa";

export default function VideoCard() {
  const Allcards = [
    {
      name: "Delivendor",
      img: "https://s3-alpha-sig.figma.com/img/7b43/04eb/6aed9811f718fa541a3f77df20fd2545?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f5qwyVWY~NILcS5nBuyEjr2Q-3s4JngxXPthdz1z7CXbPD0RymAf-szpH2lb7sQchoN1mZp45JS~gOj~0okNuVMvbeBJhfGI3041gmx1rnIQ1rOVVTcfMCQmwqz1hUUyPKSAIlP48Ma~5jTdsvYQxN~sYijbAN~zd31MLnuqzMY1rEDQ-W-77KD-zDo3P6S5YjZ402OceYL5i77R7JxhtCp3oddpA6CKhadbmQ-9ZgKbIiG3CgSwuPqub~oACtXwLybFW0gtlGxqVwKemkWgJeOXO25lHRIEvB7uuNIZN-orLbJAxTuRmLhYdJoatykTvwz1I5hpIx-P93R0-Gcogg_",
      des: "Delevendor is a modern delivery app connecting users with a wide range of vendors, including restaurants and stores. It offers an intuitive interface, real-time order tracking, and secure payment options, ensuring a seamless and convenient delivery experience.",
      textClick: "click play",
    },
    {
      name: "The Faster",
      img: "https://s3-alpha-sig.figma.com/img/6e6c/1275/4dd1f35bbebebef81a0f1521811acdf8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lps-mXvCJq2nJ5lFIpRPuqCne8E0DKex4-fchy0A9l82frkpsHN~7Rpqxnz2FcqvpABNvHD069ZCOjXNVhhHJ0npdpBUTcFw2VhyVmZuFG~QSzsM45ArbDueqMquGKumEVy3GUjhpbwwxk8A14nQyFPIV8ZMnegQukltvxghQg1vmw4igyWPD91Je7ET5m9CQZUDGle1ZcrPJ78L~ffg3i4rRNgcSLJmnp~iTh7tU2M-3firv~b9TfpdK02hrOeY-RozROFrHw~egm~wcIGBVjhK-owFTM558aYnd9~CToG8wcgPQJyOEd2b8VlIi42OmnDEF0L~XLVo81W1IIttRQ__",
      des: "Faster is a cutting-edge mobile app for on-demand transportation, offering quick, reliable rides with real-time tracking, upfront pricing, and flexible payment options. Designed for speed and comfort, Faster ensures a seamless and satisfying user experience.",
      textClick: "click play",
    },
  ];

  return (
    <>
      {Allcards.map((item, index) => (
          <div
            key={index}
            className="mx-auto w-full col-span-12 sm:col-span-5 lg:col-span-4  "
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
        ))}
    </>
  );
}
