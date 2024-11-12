import { Helmet } from "react-helmet-async";
import PagesBg from "../../components/common/PagesBg";
import ServicesContainer from "./components/ServicesContainer";
import Summary from "./components/Summary";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>
          Services 
        </title>
        <meta
          name="description"
          content="Explore our range of services from website and app development to custom software solutions. Let us help you achieve your technical goals with Depo web "
        />
      </Helmet>

      <PagesBg title={"What do we have to offer"} />
      <div className="min-h-screen gradient-bg px-4 pt-20 lg:pt-0 md:px-[104px] ">
        <Summary />
        <ServicesContainer />
      </div>
    </>
  );
}
