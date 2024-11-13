import { Helmet } from "react-helmet-async";
import PagesBg from "../../components/common/PagesBg";
import About_Depo from "./components/About Depo/About_Depo";
import Card_AboutUs from "./components/Card About/Card";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <Helmet>
        <title>About Depo Web | Empowering Businesses with Innovation</title>
        <meta
          name="description"
          content="Learn more about Depo Web's mission and values. We are dedicated to providing top-quality digital development services, empowering businesses with creative, impactful solutions."
        />
        <meta
          name="keywords"
          content="Depo Web, about us, digital development, business empowerment, scalable solutions"
        />
      </Helmet>

      <div className="gradient-bg min-h-screen">
        <PagesBg title="Get to know us better" />
        <section className="w-[calc(100%-32px)] lg:w-[calc(100%-208px)]  mx-auto">
          <About_Depo />
          <Card_AboutUs />
        </section>
      </div>
    </>
  );
}
