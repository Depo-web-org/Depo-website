export default function About_Depo() {
  return (
    <>
      <div className="grid grid-cols-12 items-center pt-[105px] lg:pt-[26px]  ">
        <div className="col-span-12 md:col-span-8 text-white ">
          <span className="text-[28px] md:text-[34px] font-bold  ">
            About Depo web
          </span>
          <p className="text-[14px] md:text-[16px] mt-2 md:me-[103px] font-normal ">
            At Depo Web, we are passionate about innovation and committed to
            transforming ideas into impactful digital solutions. With a team of
            skilled developers and creative thinkers, we specialize in providing
            a wide range of digital development and programming services
            tailored to meet the unique needs of each client. Our mission is to
            empower businesses by delivering high-quality, scalable solutions
            that drive growth and success.
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 h-[225px] w-full mt-5 sm:mt-5 md:-mt-0 mb-4 lg:mb-0">
          <img
            className="w-full sm:w-[438px] h-full rounded-lg "
            src="/images/imgas AboutUs/img AboutUs.svg"
            alt="About Us"
          />
        </div>
      </div>
    </>
  );
}
