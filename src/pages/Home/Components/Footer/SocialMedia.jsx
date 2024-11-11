export default function SocialMedia() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3  gap-4 flex w-[293px] h-[153px] flex-col items-start justify-start">
      <img className=" w-48 " src="images/logo_ 1.svg" alt="Logo" />
      <div className="flex justify-center space-x-4 mt-4">
        <img
          className="h-[41px] w-[41px]"
          src="images/facebook.svg"
          alt="Facebook"
        />
        <img
          className="h-[41px] w-[41px]"
          src="images/Layer 2 (1).svg"
          alt="Icon 2"
        />
        <img
          className="h-[41px] w-[41px]"
          src="images/Group.svg"
          alt="Icon 3"
        />
      </div>
    </div>
  );
}
