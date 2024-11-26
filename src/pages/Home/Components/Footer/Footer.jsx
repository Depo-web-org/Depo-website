import Adderss from "./Address";
import Support from "./Support";
import Services from "./Services";
import Map from "./Map";
import SocialMedia from "./SocialMedia";
import Rights from "./Rights";

function Footer() {
  return (
    <footer className="bg-white absolute hidden lg:block h-[397px] z-30 text-black">
      <div className=" grid px-8 lg:px-[104px] mt-[32px] grid-cols-12 gap-5">
        {/* Logo and Social Links */}
        <SocialMedia />
        {/* Address */}
        <Adderss />
        {/* Support Links */}
        <Support />
        {/* Services */}
        <Services />
        {/* Map and Button */}
        <Map />
      </div>

      {/* Footer Bottom */}
      <Rights />
    </footer>
  );
}

export default Footer;
