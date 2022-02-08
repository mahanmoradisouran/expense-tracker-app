import Hand from "../../assets/images/Hand.svg";
import money from "../../assets/images/Illustration.svg";
import checklist from "../../assets/images/Illustration2.svg";

const Intro = ({ slide, changeSlideHandler, skeepSlidesHandler }) => {
  return (
    <>
      {/* slider */}
      <div className="flex items-center justify-center">
        <div
          className={`flex items-center flex-col text-center  ${
            slide !== 1 ? "hidden" : ""
          }`}
        >
          <img src={Hand} alt="hand-pic" className="w-64  h-64" />
          <h1 className="text-Dark-50 text-3xl font-bold my-4">
            Gain total control of your money
          </h1>
          <p className="text-Dark-25 text-lg">
            Become your own money manager and make every cent count
          </p>
        </div>
        <div
          className={`flex items-center flex-col text-center   ${
            slide !== 2 ? "hidden" : ""
          }`}
        >
          <img src={money} alt="hand-pic" className="w-64  h-64" />
          <h1 className="text-Dark-50 text-3xl font-bold my-4">
            Know where your money goes
          </h1>
          <p className="text-Dark-25 text-lg">
            Track your transaction easily, with categories and financial report
          </p>
        </div>
        <div
          className={`flex items-center flex-col text-center   ${
            slide !== 3 ? "hidden" : ""
          }`}
        >
          <img src={checklist} alt="hand-pic" className="w-64 md:h-64 h-72" />
          <h1 className="text-Dark-50 text-3xl font-bold my-4">
            Planning ahead
          </h1>
          <p className="text-Dark-25 text-lg">
            Setup your budget for each category so you in control
          </p>
        </div>
      </div>
      {/* slider */}
      {/* indicator */}
      <div className="w-16 my-4 mx-auto flex justify-between items-center">
        <span
          className={`duration-300 transition-all w-2 h-2 rounded-full ${
            slide === 1 ? "w-4 bg-Violet-100" : "bg-Violet-20"
          }`}
        ></span>
        <span
          className={`duration-300 transition-all w-2 h-2 rounded-full ${
            slide === 2 ? "w-4 bg-Violet-100" : "bg-Violet-20"
          }`}
        ></span>
        <span
          className={`duration-300 transition-all w-2 h-2 rounded-full ${
            slide === 3 ? "w-4 bg-Violet-100" : "bg-Violet-20"
          }`}
        ></span>
      </div>
      {/* indicator */}
      <button
        onClick={changeSlideHandler}
        className="px-32 py-3 bg-Violet-100 text-Light-80 text-lg rounded-2xl"
      >
        Next
      </button>
      <button
        onClick={skeepSlidesHandler}
        className="px-32 py-3 bg-Violet-20 text-Violet-100 mt-3 text-lg rounded-2xl"
      >
        Skip
      </button>
    </>
  );
};

export default Intro;
