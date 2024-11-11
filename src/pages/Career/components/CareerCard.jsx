export default function CareerCard({ title, subtitle, index }) {
  console.log(title, subtitle);
  return (
    <div className="  h-[406px] p-2  gap-2 rounded-[16px]   bg-white shadow-lg">
      {/* Main Content */}

      <div
        className={`h-[332px] gap-0 rounded-t-[12px] rounded-br-none rounded-bl-none  ${
          index % 2 === 0 ? "bg-secondary" : "bg-[#1A4F92B0] "
        }`}
      >
        <div className="h-[88px] w-[173px] text-white pt-[64px] pl-[16px] ">
          <p className="text-[36px] font-normal leading-[43.57px] text-left ">
            {title}
          </p>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full h-[62px] flex justify-between items-center  bg-white">
        <p>{subtitle}</p>
        <ViewButton />
      </div>
    </div>
  );
}

function ViewButton() {
  return (
    <button className="w-[90px] h-[45px] px-8 py-4 gap-2 rounded-[23px] border text-center flex items-center justify-center border-secondary bg-white text-black">
      View
    </button>
  );
}
