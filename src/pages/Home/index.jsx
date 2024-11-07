import HeaderInfo from "./Components/Header Info/HeaderInfo"
import Hero from "./Components/Hero/Hero"
import Services from "./Components/OurServices/Services"

const Index = () => {
  return (
    <div className="min-h-screen bg-back-ground px-[104px]">
      <Hero/> 
      <HeaderInfo/>
      <Services/>
    </div>
  )
}

export default Index
