import ServicesContainer from "./components/ServicesContainer";
import Summary from "./components/Summary";

export default function Services() {
  return (
    <div className="min-h-screen gradient-bg px-8 md:px-[104px] py-[104px] ">
      <Summary />
      <ServicesContainer />{" "}
    </div>
  );
}
