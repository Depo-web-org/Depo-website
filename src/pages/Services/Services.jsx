import { Helmet } from "react-helmet-async";
import PagesBg from "../../components/common/PagesBg";
import ServicesContainer from "./components/ServicesContainer";
import Summary from "./components/Summary";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => window.scroll(0, 0), []);
  return (
    <>
      <Helmet>
        <title>
          Our Services | Comprehensive Digital Solutions by Depo Web
        </title>
        <meta
          name="description"
          content="Depo Web offers a range of services including web development, mobile app creation, and SEO optimization to ensure your digital presence stands out and performs."
        />
        <meta
          name="keywords"
          content="Depo Web, services, web development, app creation, SEO optimization, digital solutions"
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
