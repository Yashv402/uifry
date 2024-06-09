import React from "react";

function Notifications() {
  return (
    <div className=" relative sm:mx-[3rem] mt-[10rem] my-[5rem] lg:flex items-center">
      <img className="absolute top-0 right-0 w-[70px]" src="/BlackStar.png" alt="" />

      <div className="lg:w-[40%] lg:m-[8rem]">
        <p className="text-2xl lg:text-3xl text-[#ff5555] mb-2 font-custom2">ADVANTAGES</p>
        <h1 className="text-4xl lg:text-6xl font-bold font-custom1">Why Choose Uify?</h1>

        <div className="my-[3rem] font-custom3">
          <div className="flex items-center gap-2">
            <img className="w-[40px] lg:w-[60px]" src="/Group 35899.png" alt="" />
            <div className="text-2xl lg:text-3xl ">Clever Notifications</div>
          </div>
          <div className="text-2xl lg:text-3xl text-[#7f7f7f] mt-[1rem]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </div>
        </div>
      </div>

      <div className="relative lg:w-[50%] flex items-center justify-center">

        <img className="absolute left-0 lg:-left-10 lg:bottom-20 lg:w-[700px] -z-10" src="/Gradient.png" alt="" />
        <img
          className="absolute z-10 right-[60px] w-[380px] top-14 lg:left-[18rem] lg:top-[6rem] lg:w-[600px]"
          src="/iPhone-13-Pro-Front (5).png"
          alt=""
        />
        <img className="absolute z-10 right-[30px] lg:w-[400px] lg:right-[10rem]" src="/On Hold.png" alt="" />
        <img className="w-[500rem]" src="/Group 35887.png" alt="" />
      </div>
    </div>
  );
}

export default Notifications;
