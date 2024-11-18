import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import FormContact from "./Components/FormContact";
import { SiGmail } from "react-icons/si";
import PagesBg from "../../components/common/PagesBg";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  useEffect(() => window.scroll(0, 0), []);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("helmet.contact.title")}</title>
        <meta name="description" content={t("helmet.contact.description")} />
        <meta name="keywords" content={t("helmet.contact.keywords")} />
      </Helmet>

      <section className="gradient-bg min-h-screen ">
        {/* Header Back Ground */}
        <PagesBg title="Got a Question?" />
        <div className="pt-20  lg:pt-9 px-4 lg:px-[104px] grid grid-cols-12 pb-32">
          {/* Left Side */}

          <div className=" col-span-12 lg:col-span-7    lg:border-r lg:border-white">
            <div className="text-white">
              <h3 className=" font-bold text-[32px]">Need Help ?</h3>
              <p className="lg:text-xl italic lg:mr-16">
                Fill out the form and we will do all we can to help you
              </p>
            </div>

            {/* form */}
            <FormContact />
          </div>

          {/* Right Side */}
          <div className="col-span-12 lg:col-span-5  lg:ml-10 xl:ml-14 my-14 lg:my-0 hidden lg:block   ">
            <div className="text-white">
              <h3 className=" font-bold text-[32px]">For Direct inquiries</h3>
              <p className="text-xl italic">
                Feel free to contact us through the following
              </p>
            </div>
            <div className="flex flex-col mt-6 gap-y-10 text-white text-xl ">
              <div>
                <p className="flex items-center gap-x-2">
                  <span className="text-3xl">
                    <FaPhoneAlt className="text-secondary" />
                  </span>
                  <a
                    target="_blank"
                    className="hover:text-secondary  transition-all hover:underline duration-300"
                    href="tel:+20 1500919948 "
                  >
                    +20 1500919948
                  </a>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-x-2">
                  <span className="text-3xl">
                    <SiGmail className="text-secondary" />
                  </span>
                  <a
                    target="_blank"
                    className="hover:text-secondary  transition-all hover:underline duration-300"
                    href="mailto:info@depowebeg.com"
                  >
                    info@depowebeg.com
                  </a>
                </p>
              </div>
              <div>
                <p className="flex items-start gap-x-2">
                  <span className="text-3xl">
                    <IoLocationSharp className="text-secondary " />
                  </span>
                  <a
                    target="_blank"
                    className="hover:text-secondary transition-all hover:underline duration-300"
                    href="https://www.google.com/maps/dir/?api=1&destination=29.982003604232442,31.34399201469942"
                  >
                    Zahraa Al Maadi, Sama Towers, Building No. 9, 9th Floor,
                    Apartment No. 93
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
