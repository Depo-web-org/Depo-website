import PagesBg from "../../components/common/PagesBg";
import About_Depo from "./components/About Depo/About_Depo";
import Card_AboutUs from "./components/Card About/Card";

export default function AboutUs() {
  return (
    <div className="gradient-bg min-h-screen">
      <PagesBg title="Get to know us better" />
      <section className="w-[calc(100%-32px)] lg:w-[calc(100%-208px)]  mx-auto">
        <About_Depo />
        <Card_AboutUs />
      </section>
    </div>
  );
}
