import { t } from "i18next";
import UseEffectAboutUS from "../../../../Hooks/useEffectAboutUS";

export default function Card_AboutUs() {
  // Hoock useEffect
  UseEffectAboutUS();

  const AllCard = [
    {
      id: "111",
      name: `${t("CardsSection.Title")}`,
      img: "/images/imgas AboutUs/imgCard-1.svg",
      points: [
        { point: `${t("CardsSection.Cards.0.Points.0")}` },
        { point: `${t("CardsSection.Cards.0.Points.1")}` },
        { point: `${t("CardsSection.Cards.0.Points.2")}` },
      ],
    },
    {
      id: "222",
      name: `${t("CardsSection.Cards.0.Title")}`,
      img: "/images/imgas AboutUs/imgCard-2.svg",
      points: [
        { point: `${t("CardsSection.Cards.1.Points.0")}` },
        { point: `${t("CardsSection.Cards.1.Points.1")}` },
        { point: `${t("CardsSection.Cards.1.Points.2")}` },
      ],
    },
    {
      id: "333",
      name: `${t("CardsSection.Cards.1.Title")}`,
      img: "/images/imgas AboutUs/imgCard-3.svg",
      values: [
        {
          Title: `${t("CardsSection.Cards.2.Values.0.Title")}`,
          description: t("CardsSection.Cards.2.Values.0.Description"),
        },
        {
          Title: `${t("CardsSection.Cards.2.Values.1.Title")}`,
          description: t("CardsSection.Cards.2.Values.1.Description"),
        },
        {
          Title: `${t("CardsSection.Cards.2.Values.2.Title")}`,
          description: t("CardsSection.Cards.2.Values.2.Description"),
        },
        {
          Title: `${t("CardsSection.Cards.2.Values.3.Title")}`,
          description: t("CardsSection.Cards.2.Values.3.Description"),
        },
        {
          Title: `${t("CardsSection.Cards.2.Values.4.Title")}`,
          description: t("CardsSection.Cards.2.Values.4.Description"),
        },
      ],
    },
  ];

  return (
    <section className="grid grid-cols-12 gap-5 pb-5 mt-[26px]">
      {AllCard.map((item, index) => (
        <div
          key={item.id}
          className={`bg-primary relative col-span-12 md:col-span-6 h-auto text-white w-full py-3 ps-3 rounded-md flex flex-col md:flex-row ${
            index === AllCard.length - 1
              ? "sm:col-span-12 md:col-span-12 lg:col-span-12 lg:w-[calc(100%-43%)]  md:ms-[220px] lg:m-auto"
              : ""
          }`}
        >
          {/* Text card */}
          <div
            className={`w-full h-auto pb-24 md:pb-24 relative  
              ${index === AllCard.length - 1 ? "pb-[5px]" : ""}`}
          >
            <p className="text-[24px] md:text-[32px] leading-[30px] md:leading-[38.73px] font-bold">
              {item.name}
            </p>
            <div className="mt-5 pe-2">
              {Array.isArray(item.values) ? (
                item.values.map((subItem, index) => (
                  <p key={index} className="mb-2">
                    <span className="font-bold ">{subItem.Title} </span>
                    {subItem.description}
                  </p>
                ))
              ) : (
                <span className="text-[14px] md:text-[16px] font-normal">
                  {/* Creating  <br/> */}
                  {AllCard[0].points.map((item, index) => (
                    <p key={index}>{item.point}</p>
                  ))}
                </span>
              )}
            </div>
          </div>

          {/* Img card*/}
          <div
            className={`w-[156px] h-[96px] bottom-2  absolute right-0 ${
              index === AllCard.length - 1 ? "hidden md:block" : ""
            }`}
          >
            <img className="h-full w-full" src={item.img} alt="img About" />
          </div>
        </div>
      ))}
    </section>
  );
}
