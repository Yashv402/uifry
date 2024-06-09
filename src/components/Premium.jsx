import React from "react";

function Premium() {
  return (
    <div className="relative lg:flex items-center overflow-hidden">
      <img className="absolute top-0 w-[70px]" src="/BlackStar.png" alt="" />
      <img
        className="absolute sm:hidden top-0 -right-[15rem]"
        src="/Gradient.png"
        alt=""
      />

      <div className="lg:w-[55%] relative flex justify-center lg:ml-[8rem]">
        <img
          className="absolute w-[300rem] lg:w-[400rem] -left-[8rem] -z-10"
          src="/Gradient.png"
          alt=""
        />
        <img
          className="absolute z-10 top-[5rem] lg:top-[7rem] lg:w-[400px]"
          src="/iPhone-13-Pro-Front (4).png"
          alt=""
        />
        <img className="w-[150rem]" src="/Group 35887.png" alt="" />
      </div>

      <div className="lg:w-[50%] lg:mr-[8rem] mx-[3rem]">
        <p className=" text-2xl lg:text-3xl text-[#ff5555] mb-2 font-custom3">Features</p>
        <h1 className="text-4xl lg:text-6xl font-bold font-custom1">Unify Premium</h1>

        <div className="my-[3rem] font-custom3">
          <div className="flex items-center gap-2">
            <img width={30} height={30} src="/star-05.png" alt="" />
            <div className=" text-2xl lg:text-3xl ">Budgeting Intervals</div>
          </div>
          <div className="text-2xl lg:text-3xl text-[#7f7f7f] mt-[1rem]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </div>
        </div>

        <div className="my-[3rem] font-custom3">
          <div className="flex items-center gap-2">
            <img width={30} height={30} src="/cube-02.png" alt="" />
            <div className="text-2xl lg:text-3xl ">Budgeting Intervals</div>
          </div>
          <div className="text-3xl lg:text-3xl text-[#7f7f7f] mt-[1rem]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </div>
        </div>

        <div className="my-[3rem] font-custom3">
          <div className="flex items-center gap-2">
            <img width={30} height={30} src="/cube-04.png" alt="" />
            <div className="text-2xl lg:text-3xl ">Budgeting Intervals</div>
          </div>
          <div className="text-2xl lg:text-3xl text-[#7f7f7f] mt-[1rem]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 -right-[15rem]"
        src="/Gradient.png"
        alt=""
      />
    </div>
  );
}

export default Premium;
