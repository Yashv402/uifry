import React from "react";

function Customizable() {
  return (
    <div className=" relative mx-[2rem]  lg:flex items-center justify-center ">
      <img
        className="absolute -bottom-14 right-0 lg:right-[10rem] lg:w-[80px]"
        src="/BlackStar.png"
        alt=""
      />
      <img className="absolute top-0 lg:w-[70px]" src="/BlackStar.png" alt="" />

      <div className=" relative flex items-center justify-center">
        <img
          className="absolute rotate-180 w-[1000px] left-[8rem] bottom-0 -z-10"
          src="/Gradient.png"
          alt=""
        />

        <img
          className="absolute w-[250px] lg:w-[460px]"
          src="/iPhone-13-Pro-Front (4).png"
          alt=""
        />
        <img
          className="absolute z-20 top-[13rem] lg:top-[25rem] left-[15rem] lg:left-[28rem] w-[240px] lg:w-[400px]"
          src="/Group (1).png"
          alt=""
        />
        <img className="w-[350rem]"src="/Group 35887.png" alt="" />
      </div>

      <div className=" mr-[8rem]">
        <div className="my-[3rem]">
          <div className="flex items-center gap-2">
            <img className="w0[50px] lg:w-[80px]" src="/Group 35899 (1).png" alt="" />
            <div className="text-4xl lg:text-6xl font-bold font-custom1">Fully Customizable</div>
          </div>

          <div className="text-2xl lg:text-3xl text-[#7f7f7f] mt-[3rem] font-custom3">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customizable;
