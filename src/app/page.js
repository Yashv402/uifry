'use client'

import AboutUs from "@/components/AboutUs";
import Customizable from "@/components/Customizable";
import Decisions from "@/components/Decisions";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";
import Notifications from "@/components/Notifications";
import Premium from "@/components/Premium";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    document.body.style.zoom ="67%"
  })
  return (
    <>
    <Header />
    <Decisions />
    <Premium />
    <Notifications />
    <Customizable />
    <AboutUs />
    <Faq/>
    <GetStarted />
    <Footer />
    </>
  );
}
