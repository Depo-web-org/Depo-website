import { Helmet } from "react-helmet-async";
import PagesBg from "../../components/common/PagesBg";
import About_Depo from "./components/About Depo/About_Depo";
import Card_AboutUs from "./components/Card About/Card";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn about Depo web's journey, vision, and extensive experience in software development. We are dedicated to delivering the best solutions to help you achieve your goals."
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
