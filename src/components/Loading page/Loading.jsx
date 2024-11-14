import "./Loading.css";
export default function Loading() {
  return (
    <>
      <div className="gradient-bg min-h-screen flex flex-col justify-center items-center">
        <img
          src="/images/lOGO.svg"
          alt="loading img"
          className="w-24 h-auto md:w-32 md:h-32 lg:w-40 lg:h-auto object-contain "
        />

        {/* laoding */}
        <div>
          <div className="wrapper">
            <div className="colors ball" />
            <div className="colors ball" />
            <div className="colors ball" />
            <div className="colors ball" />
          </div>
        </div>
      </div>
    </>
  );
}
