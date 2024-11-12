import PagesBg from "../../components/common/PagesBg";
import ServicesContainer from "./components/ServicesContainer";
import Summary from "./components/Summary";

export default function Services() {
  return (
    <>
      <PagesBg title={"What do we have to offer"} />
      <div className="min-h-screen gradient-bg px-8 pt-20 lg:pt-0 md:px-[104px] ">
        <Summary />
        <ServicesContainer />{" "}
      </div>
    </>
  );
}
