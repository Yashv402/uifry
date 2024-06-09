import React from "react";

function Footer() {
  return (
    <div className="lg:mx-[15rem] mx-[3rem] lg:mb-[10rem] ">
      <div className="flex justify-between mb-[3rem] flex-wrap gap-6">

        <div className="flex flex-col gap-5">
          <img src="/Group.png" width={180} alt="" />
          <div className="flex items-center gap-2">
            <img src="/Frame.png" width={40} alt="" />
            <span className="text-2xl lg:text-3xl ">Help@FryBix.Com</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/Frame (1).png" width={40} alt="" />
            <span className="text-2xl lg:text-3xl ">+1234 456 678 89</span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
            <div className="text-4xl lg:text-5xl">Links</div>
            <ul className="text-2xl lg:text-3xl  flex flex-col gap-5">
                <li>Home</li>
                <li>About Us</li>
                <li>Bookings</li>
                <li>Blog</li>
            </ul>
        </div>

        <div className="flex flex-col gap-5">
            <div className="text-4xl lg:text-5xl">Legal</div>
            <ul className="text-2xl lg:text-3xl flex flex-col gap-5">
                <li>Terms Of Use</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
            </ul>
        </div>

        <div className="flex flex-col gap-5">
            <div className="text-4xl lg:text-5xl">Product</div>
            <ul className="text-2xl lg:text-3xl flex flex-col gap-5">
                <li>Take Tour</li>
                <li>Live Chat</li>
                <li>Reveiws</li>
            </ul>
        </div>

        <div className="flex flex-col gap-5">
            <div className="text-4xl lg:text-5xl">Newsletter</div>
            <div className="text-2xl lg:text-3xl ">Stay Up To Date</div>
            <div className="flex gap-5">
                <input className="text-2xl border border-zinc-500 p-3 w-[15rem] rounded-xl" type="text" placeholder="stay up to date"  />
                <button className="text-2xl lg:text-3xl  bg-black text-white py-3 px-6 rounded-xl">Subscribe</button>
            </div>
        </div>
      </div>
      <hr />
      <div className="lg:text-3xl text-2xl flex justify-center m-[3rem]">Copyright 2022 uifry.com all rights reserved</div>
    </div>
  );
}

export default Footer;
