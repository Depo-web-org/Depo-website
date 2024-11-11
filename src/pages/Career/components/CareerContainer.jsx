import CareerCard from "./CareerCard";

export default function CareerContainer({ careerArray }) {
  console.log(careerArray);
  return (
    <>
      <p className="font-[Inter] text-[32px] font-bold leading-[38.73px] text-left text-white ">
        Explore Available Opportunities
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-[40px]">
        {careerArray.map((card, index) => (
          <CareerCard
            key={index}
            index={index}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </>
  );
}
