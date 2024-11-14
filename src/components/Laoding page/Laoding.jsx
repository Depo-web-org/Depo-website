import "./Laoding.css";
export default function Laoding() {
  return (
    <>
      <div className="gradient-bg min-h-screen flex flex-col justify-center items-center">
        <img
          src="/images/lOGO.svg"
          alt="loading img"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain "
        />

        {/* laoding */}
        <div>
          <div className="wrapper">
            <div className="blue ball" />
            <div className="red ball" />
            <div className="yellow ball" />
            <div className="green ball" />
          </div>
        </div>
      </div>
    </>
  );
}
