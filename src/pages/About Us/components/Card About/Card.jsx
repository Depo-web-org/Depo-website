export default function Card_AboutUs() {
  const AllCard = [
    {
      id: "111",
      name: "Our Vision",
      img: "/images/imgas AboutUs/imgCard-1.svg",
      dec: "To be a leading digital solutions provider, recognized for our commitment to quality, innovation, and client success. We envision a future where Depo web continues to set new standards in the digital industry, helping businesses around the world reach their full potential through cutting-edge technology.",
    },
    {
      id: "222",
      name: "Our Mission",
      img: "/images/imgas AboutUs/imgCard-2.svg",
      dec: "Our mission is to deliver customized, user-centered digital solutions that empower businesses to thrive in a rapidly evolving digital landscape. We are dedicated to excellence in every project, focusing on continuous improvement, collaboration, and integrity. At Depo web, we aim to bring our clients' visions to life through seamless and innovative digital experiences.",
    },
    {
      id: "333",
      name: "Our Values",
      img: "/images/imgas AboutUs/imgCard-3.svg",
      dec: [
        {
          title: ". Innovation ",
          text: "We embrace creativity and stay ahead of industry trends to deliver cutting-edge solutions.",
        },
        {
          title: ". Client-Centricity ",
          text: "We prioritize our clients' needs, tailoring solutions to help them succeed.",
        },
        {
          title: ". Integrity ",
          text: "We operate with transparency and honesty in every aspect of our work.",
        },
        {
          title: ". Excellence ",
          text: "We focus on high-quality results that make a real impact.",
        },
        {
          title: ". Collaboration ",
          text: "We believe in teamwork, combining ideas to create the best solutions.",
        },
      ],
    },
  ];

  return (
    <>
      <section className="grid grid-cols-12 gap-5 pb-5 mt-[26px]">
        {AllCard.map((item, index) => (
          <div
            key={item.id}
            className={`bg-primary relative col-span-12 md:col-span-6 h-auto text-white w-full py-3 ps-3 rounded-md flex flex-col md:flex-row ${
              index === AllCard.length - 1
                ? "sm:col-span-12 md:col-span-12 lg:col-span-12 lg:w-[calc(100%-43%)]  md:ms-[220px] lg:m-auto"
                : ""
            }`}
          >
            {/* Text */}
            <div className="w-full h-auto pb-24 relative z-30">
              <p className="text-[24px] md:text-[32px] leading-[30px] md:leading-[38.73px] font-bold">
                {item.name}
              </p>
              <div className="mt-5 md:mt-0">
                {Array.isArray(item.dec) ? (
                  item.dec.map((subItem, index) => (
                    <p key={index} className="mb-2">
                      <span className="font-bold">{subItem.title}:</span>
                      {subItem.text}
                    </p>
                  ))
                ) : (
                  <span className="text-[14px] md:text-[16px] font-normal">
                    {item.dec}
                  </span>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="w-[156px] h-[96px] bottom-2  absolute right-0 ">
              <img className="h-full w-full" src={item.img} alt="img About" />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
