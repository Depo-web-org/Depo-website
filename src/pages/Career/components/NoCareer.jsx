export default function NoCareer() {
  return (
    <div className="py-44  lg:py-0">
      <div>
        <p className="font-[Inter] md:pb-24   text-[16px] md:text-[32px] font-bold leading-[38.73px] text-left text-white">
          There are no jobs available right now
        </p>
      </div>
      <div className="flex items-center py-28 lg:py-0 md:pt-0 justify-center -mt-[50px] relative z-20">
        <img
          src="public/images/career/Feeling sorry-bro.svg"
          className="w-2/3"
          alt="no-career"
        />
      </div>
    </div>
  );
}
