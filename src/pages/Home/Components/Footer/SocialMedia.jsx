export const SocialMediaLogos = () => {
  return (
    <>
      <div className="flex justify-center max-w-60 flex-wrap items-center gap-4 mt-4">
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
        <a
          href="https://www.youtube.com/@depoweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-[41px] w-[41px]"
            src="images/youtube.svg"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://x.com/depowebeg?s=21&t=NFNL1oVylB3bysdsizslCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-[41px] w-[41px]"
            src="images/x.svg"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://www.tiktok.com/@depoweb.eg?_t=8rYSfX3k64O&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-[41px] w-[41px]"
            src="images/tiktok.svg"
            alt="LinkedIn"
          />
        </a>
      </div>
    </>
  );
};
export default function SocialMedia() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 gap-4 flex  max-w-60  h-[153px] flex-col items-center justify-start">
      <div>
        <img className="w-full" src="images/logo_ 1.svg" alt="Logo" />
      </div>
      <SocialMediaLogos />
    </div>
  );
}
