import Button from "../../../components/common/Button";
import ServiceItem from "./ServiceItem";

export default function Summary() {
  return (
    <div className="flex items-center text-white container">
      <div className="w-[502px]  h-[154px] flex flex-col justify-start items-start ">
        <h1 className="font-semibold text-xl">Our Services</h1>
        <p>
          we specialize in delivering high-quality digital solutions tailored to
          meet modern business needs.
        </p>
        <Button />
      </div>
      <div></div>
    </div>
  );
}
