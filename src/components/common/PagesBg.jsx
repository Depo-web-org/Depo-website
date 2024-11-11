
const PagesBg = ({title}) => {
  return (
    <div className="pt-[85px] relative hidden lg:block w-full  "> 
    <div className="absolute flex w-full items-center justify-center top-14 h-full  ">
        <p className="lg:text-[40px]  text-white font-bold  ">
            {title   }
        </p>
    </div>
    <img src="https://s3-alpha-sig.figma.com/img/a5a1/679b/8c8492c9dfc3b1e27a25acbef2ed4d8a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ApUPNoWKsscKeOYH8hZkiaIk~Bpqjo6EBOnEqB0wikDRamr2Up6Lx8Z2caG1caZ1jHx-buPeRyu9ESfK6AfT5xnJu0UDbDPpNsJ~AjVaV8HLal61AW1qnimeqMiY9RgWdCNEPrBBE1ZMnL6JKnww9t7JUjlno1mjx3nBzrvCsDHq-XUwlKpH2meXOY50zWoBBS9vTQmW9l3Br8AMK4U-AHwcmj3CyBjcrWKE~TNbjKtaPLIJQRrX4~O0AlZ7m5ukFGYeJulDGH5AiQxaMZY3Ljs9~R-CIvVkD2R5HQhKtTPOH5ZrzLIBNbI1VpCY0ucobBAJBz4miy~NMzf06PB0iQ__" className="w-full " />
    </div>
  )
}

export default PagesBg
