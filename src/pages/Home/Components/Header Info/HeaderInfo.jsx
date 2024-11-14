import './style.css'
const HeaderInfo = () => {
  return (
    <section className='section-border  '>
        <h2 className="text-white font-bold text-2xl lg:text-[32px] lg:text-center lg:mt-8 mb-6 lg:mb-16">
        The Software Development Company
        <span className="block mt-2">
        That Empowers Businesses
        </span>
        </h2>
        <div className="flex gap-5 lg:flex-row flex-col ">
            <div className="Header-Info-card hover:bg-[#ffffff5b] flex-1 hover:shadow-custom  transition-all duration-300  border border-border-color rounded-2xl Header-Info-card leading-9 " >
                <p className="text-white mx-8 lg:mx-12 my-8 text-base lg:text-[20px]">
                At Depo Web, we are a forward-thinking company specializing in innovative digital development and programming solutions that meet the evolving needs of modern businesses. Our goal is    simple yet impactful: to empower organizations by creating tailored digital solutions that not only meet their current needs but also position them for future growth.
                </p>
            </div>
            <div className="Header-Info-card hover:bg-[#ffffff5b] flex-1 hover:shadow-custom  transition-all duration-300  border border-border-color rounded-2xl card leading-9 " >

                <p className="text-white mx-8 lg:mx-12 my-8  text-base text-[20px]">
                <span className='font-bold block text-xl lg:text-2xl'> Mission:</span>
                Highlight your mission to enhance business efficiency and productivity with tailored digital solutions
              <span className='font-bold block text-2xl'>Vision:</span>
              To lead in digital innovation by empowering businesses with high-quality, customized technology solutions. At Depo, we transform ideas into digital realities that drive impact and enhance business success.
                </p>
            </div>

        </div>




    </section>
  )
}

export default HeaderInfo
