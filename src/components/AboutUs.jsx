import React from "react";

function AboutUs() {
  return (
    <div className=" relative mx-[3rem] my-[5rem] ">

      <img className="absolute bottom-0 -left-10 lg:w-[80px]" src="/BlackStar.png" alt="" />


      <div className="flex flex-col items-center">
        <div className="text-2xl lg:text-3xl mb-2 font-custom3 ">TESTIMONIAL</div>
        <div className="text-5xl lg:text-7xl font-bold font-custom1">
          What Our Users <br />
          Say About Us?
        </div>
      </div>

      <div className="lg:flex items-center">
        <div className=" relative flex justify-center items-center">

          <img className="absolute left-0 lg:w-[800px]" src="/Gradient.png" alt="" />

          <img className="w-[600px] lg:w-[1000px]" src="/Group 35887.png" alt="" />
          <div className="absolute flex flex-col top-0 lg:top-[10rem] justify-between h-[25rem] w-[30rem] lg:h-[35rem] lg:w-[40rem]">
            <div className="flex justify-between">
            <img
                    className="border-4 border-black overflow-hidden rounded-full w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover"
                    src="/Ellipse 44.png"
                    alt=""
                />
                <img
                    className="border-4 border-black  overflow-hidden rounded-full w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] object-cover"
                    src="/Ellipse 42.png"
                    alt=""
                />
            </div>
            <div className="flex justify-center items-center">
            <img
                    className="border-4 border-black overflow-hidden rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover"
                    src="/Ellipse 41.png"
                    alt=""
                />
                <div className="absolute right-28 lg:right-32 bg-[#FF5555] w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] rounded-full flex justify-center items-center "><img className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]" src="/Quotes.png" alt="" /></div>
            </div>
            <div className="flex justify-between items-end ">
            <img
                    className="border-4 border-black  overflow-hidden rounded-full w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] object-cover"
                    src="/Ellipse 45.png"
                    alt=""
                />
                <img
                    className="border-4 border-black  overflow-hidden rounded-full w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover"
                    src="/Ellipse 43.png"
                    alt=""
                />
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-4 lg:w-[50%] mr-[8rem]">
          <div className="text-4xl lg:text-6xl font-bold font-custom1">
            The Best Financial Accounting App Ever!
          </div>
          <div className="text-xl lg:text-3xl text-[#7f7f7f] mt-[1rem] font-custom3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </div>
          <img className="h-[50px] w-[250px] lg:h-[70px] lg:w-[350px]" src="/Group 35917.png" alt="" />
          <div className="text-2xl lg:text-3xl font-bold font-custom3">Nick Jonas</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
