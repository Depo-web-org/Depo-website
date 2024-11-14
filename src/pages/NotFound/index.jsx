import { Link } from "react-router-dom"
import PagesBg from "../../components/common/PagesBg"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import './style.css'
const NotFound = () => {
  return (
    <div className="gradient-bg  flex flex-col">
    <PagesBg title={"OOPS!"} />
    <div className="w-full flex flex-col min-h-screen relative">
    <div className="flex justify-center items-center flex-grow lg:flex-row flex-col gap-y-3 relative z-10" >
        <div className="">
            <h4 className="text-9xl font-bold text-white lg:mr-16">404</h4>
        </div>
        <div className="lg:pl-8 text-white text-center lg:border-l-8 lg:border-white">
            <h6 className="text-2xl lg:text-5xl font-bold">Sorry!</h6>
            <p className="italic text-xl lg:text-4xl">
                The page you were looking for <br />
                Was not found
            </p>
            <p className="underline text-lg lg:text-[32px] py-8">
                <Link to={'/'}>
                    <FaArrowAltCircleLeft className="text-secondary inline mr-2 text-3xl lg:text-5xl" />Go back
                </Link>
            </p>
        </div>
    </div>
    {/* SVG  */}
    <div>
        <img src="/public/images/wave.svg" alt="" className="w-full" />
    </div>
    <div className="absolute  w-full        flex lg:top-1/2 lg:-translate-y-full top-32 justify-center ct-animate-blink">
        <img src="/images/moon.svg" alt="night_sky" className="hidden lg:inline"/>
        <img src="/images/stars.svg" alt="nights star " className="absolute opacity-35 lg:hidden " />
        <img src="/images/Vector.svg" alt="nights star"  className="absolute   left-[calc(100%-90%)]  lg:hidden "/>
    </div>
</div>

</div>

  )
}

export default NotFound
