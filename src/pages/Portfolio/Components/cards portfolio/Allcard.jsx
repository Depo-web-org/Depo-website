import { FaPlay } from "react-icons/fa";

export default function Allcard() {
  const Allcards = [
    {
      name: "Delivendor",
      img: "https://s3-alpha-sig.figma.com/img/7b43/04eb/6aed9811f718fa541a3f77df20fd2545?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f5qwyVWY~NILcS5nBuyEjr2Q-3s4JngxXPthdz1z7CXbPD0RymAf-szpH2lb7sQchoN1mZp45JS~gOj~0okNuVMvbeBJhfGI3041gmx1rnIQ1rOVVTcfMCQmwqz1hUUyPKSAIlP48Ma~5jTdsvYQxN~sYijbAN~zd31MLnuqzMY1rEDQ-W-77KD-zDo3P6S5YjZ402OceYL5i77R7JxhtCp3oddpA6CKhadbmQ-9ZgKbIiG3CgSwuPqub~oACtXwLybFW0gtlGxqVwKemkWgJeOXO25lHRIEvB7uuNIZN-orLbJAxTuRmLhYdJoatykTvwz1I5hpIx-P93R0-Gcogg_",
      des: "Delevendor is a modern delivery app connecting users with a wide range of vendors, including restaurants and stores. It offers an intuitive interface, real-time order tracking, and secure payment options, ensuring a seamless and convenient delivery experience.",
      textclick: "click play",
    },
    {
      name: "The Faster",
      img: "https://s3-alpha-sig.figma.com/img/6e6c/1275/4dd1f35bbebebef81a0f1521811acdf8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lps-mXvCJq2nJ5lFIpRPuqCne8E0DKex4-fchy0A9l82frkpsHN~7Rpqxnz2FcqvpABNvHD069ZCOjXNVhhHJ0npdpBUTcFw2VhyVmZuFG~QSzsM45ArbDueqMquGKumEVy3GUjhpbwwxk8A14nQyFPIV8ZMnegQukltvxghQg1vmw4igyWPD91Je7ET5m9CQZUDGle1ZcrPJ78L~ffg3i4rRNgcSLJmnp~iTh7tU2M-3firv~b9TfpdK02hrOeY-RozROFrHw~egm~wcIGBVjhK-owFTM558aYnd9~CToG8wcgPQJyOEd2b8VlIi42OmnDEF0L~XLVo81W1IIttRQ__",
      des: "Faster is a cutting-edge mobile app for on-demand transportation, offering quick, reliable rides with real-time tracking, upfront pricing, and flexible payment options. Designed for speed and comfort, Faster ensures a seamless and satisfying user experience.",
      textclick: "click play",
    },
  ];

  return (
    <>
      {Allcards.map((item, index) => (
        <div key={index} className="mx-auto w-full max-w-[396px]">
          <div className="bg-[#FCF5EB] rounded-lg relative group overflow-hidden">
            {/* Img Container */}
            <div className="px-4 relative flex justify-center items-center pt-3 pb-2 transition-all duration-1000 group-hover:pt-0 group-hover:px-0">
              <img
                src={item.img}
                alt="img card"
                className="rounded-lg  w-full h-[196px] object-cover transition-all duration-1000 group-hover:w-full"
              />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content Container */}
            <div className="relative h-[60px] transition-all duration-1000 ease-in-out group-hover:h-[190px]">
              {/* Title and Icon */}
              <div className="flex items-center mx-auto h-[50px] w-auto mb-3 ms-3">
                <h3 className="text-black text-[18px] md:text-[23px] leading-[29.05px] font-medium ">
                  {item.name}
                </h3>
                <FaPlay
                  className="w-[20px] md:w-[25px] h-[20px] md:h-[25px] ms-2 text-[#331F5A] transition-all duration-[1000ms] ease-in-out 
                        group-hover:translate-x-[240px] sm:group-hover:translate-x-[200px] group-hover:rotate-180"
                />
                <span className="text-gray-600 font-medium ps-[140px] md:ps-[100px] opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-[1000ms]">
                  {item.textclick}
                </span>
              </div>

              {/* Description with slow reveal animation */}
              <div className="relative overflow-hidden group">
                <p className="text-black text-[14px] md:text-[16px] leading-[19.36px] font-medium px-4 pb-2 transform translate-y-0 transition-all duration-1000 ease-in-out">
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
