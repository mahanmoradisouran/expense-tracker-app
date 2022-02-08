import { useState } from "react";
import GetNameForm from "../GetNameForm/GetNameForm";

import Intro from "../intro/intro";

const GetNameScreen = () => {
  const [slide, setSlide] = useState(1);

  const changeSlideHandler = () => setSlide((prev) => prev + 1);
  const skeepSlidesHandler = () => setSlide(4);

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col items-center text-center py-5">
        {slide > 3 ? <GetNameForm setSlide={setSlide}/> : (
          <Intro slide={slide} changeSlideHandler={changeSlideHandler} skeepSlidesHandler={skeepSlidesHandler}/>
        )}
      </div>
    </div>
  );
};

export default GetNameScreen;
