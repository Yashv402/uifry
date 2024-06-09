import React from "react";

function Decisions() {
  return (
    <div className="relative lg:flex overflow-hidden">
      <img
        className="absolute sm:hidden left-10 top-10 w-[70px]"
        src="/BlackStar.png"
        alt=""
      />
      <img
        className="absolute top-[55rem]  sm:right-0 lg:left-[20rem] lg:top-[45rem] lg:w-[70px]"
        src="/BlackStar.png"
        alt=""
      />
      <img
        className="absolute right-[50rem] bottom-[15rem] lg:w-[70px]"
        src="/BlackStar.png"
        alt=""
      />
      <img
        className="absolute right-0 lg:-top-10 lg:w-[70px] rotate-45"
        src="/BlackStar.png"
        alt=""
      />
      <img
        className="absolute -top-[10rem] lg:left-[25rem] lg:-top-[6rem] w-[700px] -z-10"
        src="/Gradient.png"
        alt=""
      />

      <div className="mx-[2rem] lg:w-[55%] mt-[5rem] lg:ml-[12rem]">
        <div className="text-5xl custom1 lg:text-[100px] font-bold">
          Make The Best Financial Decisions
        </div>

        <p className="text-2xl lg:text-3xl my-[2rem]">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex gap-7">
          <button className="text-2xl lg:text-3xl px-7 py-4 flex items-center bg-black text-white rounded-xl">
            Get Started <img src="/RightArrow.png" width={30} alt="" />
          </button>
          <button className="text-2xl lg:text-3xl px-5 py-2 flex gap-3 items-center">
            <img
              src="/play_circle_24dp_FILL0_wght400_GRAD0_opsz24.png"
              width={40}
              alt=""
            />
            Watch Video
          </button>
        </div>
        <img className="mt-6" width={900} src="/Group 35924.png" alt="" />
      </div>

      <div className="relative lg:w-[50%] h-[50rem]">
        <img
          className="absolute top-[15rem] lg:top-[25rem] w-[800px] lg:w-[1000px] right-0 rotate-180"
          src="/Gradient.png"
          alt=""
        />
        <img
          className="lg:absolute lg:right-0 lg:top-0 w-[800px] lg:w-[1000px]"
          src="/Group 35887.png"
          alt=""
        />
        <img
          className="absolute right-0 top-36 lg:top-[15rem] lg::right-0 lg:w-[700px]"
          src="/iPhone-13-Pro-Front (2).png"
          alt=""
        />
        <img
          className="absolute top-20 right-10 lg:top-[10rem] lg:right-[3rem] lg:w-[830px]"
          src="/iPhone-13-Pro-Front (1).png"
          alt=""
        />
        <img
          className="absolute top-10 lg:top-[5rem] lg:right-[23rem] lg:w-[700px]"
          src="/iPhone-13-Pro-Front (2).png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Decisions;
