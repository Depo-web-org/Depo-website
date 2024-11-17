
const PagesBg = ({title}) => {
  return (
    <div className="pt-[85px] relative hidden lg:block w-full  "> 
    <div className="absolute flex w-full items-center justify-center top-14 h-full  ">
        <p className="lg:text-[40px]  text-white font-bold  ">
            {title   }
        </p>
    </div>
    <img src="/images/componentsBg.svg" className="w-full " />
    </div>
  )
}

export default PagesBg
