import CareerCard from "./CareerCard";

export default function CareerContainer({ careerArray }) {
  console.log(careerArray);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {careerArray.map((card, index) => (
        <CareerCard
          key={index}
          index={index}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
}
