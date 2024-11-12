import Button from "../../../components/common/Button";

export default function Summary() {
  return (
    <div className="flex items-center pt-[32px] text-white container">
      <div className="w-[502px]  h-[154px] flex flex-col justify-start items-start ">
        <h1 className="font-semibold text-xl">Our Services</h1>
        <p>
          we specialize in delivering high-quality digital solutions tailored to
          meet modern business needs.
        </p>
        <div className="py-[16px]">
          <Button
            style="h-[51px] text-[15px]  w-[312px]"
            title="Learn More About Our Solutions"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
