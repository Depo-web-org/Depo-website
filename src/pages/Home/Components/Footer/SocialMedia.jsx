export default function SocialMedia() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 gap-4 flex w-[293px] h-[153px] flex-col items-start justify-start">
      <img className="w-48" src="images/logo_ 1.svg" alt="Logo" />
      <div className="flex justify-center items-center gap-4 mt-4">
        <a
          href="https://www.facebook.com/profile.php?id=61567296676384&mibextid=kFxxJD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-[41px] w-[41px]"
            src="images/facebook.svg"
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/depo.web/profilecard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-[41px] w-[41px]"
            src="images/Layer 2 (1).svg"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/depo-web-company/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-[41px] w-[41px]"
            src="images/Group.svg"
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
}
