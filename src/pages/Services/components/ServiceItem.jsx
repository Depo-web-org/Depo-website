export default function ServiceItem({ title, description, image }) {
  return (
    <div
      className="relative h-[238px] bg-cover bg-center rounded-[10px] overflow-hidden group"
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

      <div className="absolute bottom-0 left-0 w-full p-4 bg-primary bg-opacity-75 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}
