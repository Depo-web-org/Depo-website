
const Title = ({title,description}) => {
  return (
    <div className="w-full flex items-center md:pt-[32px] pb-[32px] md:pb-[16px] text-white container ">
    <div className=" flex flex-col justify-start items-start">
      <p className="font-inter text-2xl md:text-[32px] font-bold leading-[38.73px] ">
       {title} 
      </p>

      <p className="font-inter text-lg italic font-normal my-2 ">
     
     {description} 
      </p>

    </div>
  </div>
  )
}

export default Title
