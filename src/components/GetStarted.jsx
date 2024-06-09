import React from "react";

function GetStarted() {
  return (
    <div className="flex items-center justify-center h-auto relative">
      <img className="absolute top-0 left-0 -z-10 w-[250px] lg:w-[500px]" src="/Gradient.png" alt="" />
      <img className="absolute left-5 lg:left-28 w-[50px] lg:w-[80px]" src="/BlackStar.png" alt="" />


      <div className="bg-black text-white w-[75%] h-[50rem] my-[6rem] lg:m-[10rem] rounded-3xl lg:h-[45rem]">


        <div className=" relative flex flex-wrap h-full justify-between">

          <img className="absolute top-[25rem] left-[5rem] lg:top-10 lg:right-[50rem] rotate-45" src="/WhiteStar.png" alt="" />
          <img className="absolute hidden lg:block bottom-20 left-[40rem]"  src="/WhiteStar.png" alt="" />
          <img className="absolute rotate-180 bottom-10 lg:-bottom-10 -right-16 lg:-right-28 w-[400px]  lg:x-[700px]"  src="/Gradient.png" alt="" />
          <img className="absolute top-0 right-0 rotate-180"  src="/Group 35905.png" alt="" />
          <img className="absolute bottom-0" width={450}  src="/Group 35905.png" alt="" />


          <div className="w-[100%] lg:w-[50%] lg:ml-[5rem] m-[3rem] flex lg:items-center">
            <div>
            <h1 className="text-5xl font-custom1">Ready To Get Started?</h1>
            <p className="text-2xl my-[1rem] font-custom2">
              Risus habitant leo egestas mauris diam eget morbi tempus
              vulputate.
            </p>
            <button className=" flex items-center gap-2 text-2xl lg:text-3xl text-black bg-white px-[2rem] py-[1rem] rounded-xl font-custom3">Download App <img
            className=" w-[30px] lg:w-[50px]" src="/Vector.png" alt="" /></button>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 flex items-end w-[45%]">
            <img className="absolute bottom-16 lg:bottom-20 right-0 h-[350px] lg:h-[600px]" src="/3.png"  alt="" />
            <img className="absolute bottom-7 right-0 lg:h-[650px]" src="/2.png" alt="" />
            <img className="absolute bottom-10 lg:right-36 h-[300px] lg:h-[500px]" src="/Shadow.png" alt="" />
            <img className="absolute bottom-6 right-40 lg:right-72 lg:h-[550px]" src="/1 (4).png" alt="" />
          </div>
        </div>
      </div>
      <img className="absolute top-0 right-28" width={80} src="/BlackStar.png" alt="" />
    </div>
  );
}

export default GetStarted;
