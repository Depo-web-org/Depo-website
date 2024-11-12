import Button from "../../../components/common/Button";

export default function Summary() {
  return (
    <div className="flex items-center lg:pt-[32px] pb-[32px] md:pb-[16px]  text-white container ">
      <div className="w-[502px]  h-[154px] flex flex-col justify-start items-start ">
        <p className="font-inter text-2xl font-bold leading-[38.73px] text-left">
          Our Services
        </p>
        <p className="font-inter text-lg italic font-normal leading-[24.2px] text-left">
          we specialize in delivering high-quality digital solutions tailored to
          meet modern business needs.
        </p>
        <div className="py-[16px]">
          <Button
            style="h-[51px] text-[15px] "
            title="Learn More About Our Solutions"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
