"use client";
import { FC } from "react";
import React from "react";
import ArrowButton from "../components/custom/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Image from "next/image";
import LOGO from "../app/assets/LOGO.svg";
import Circle from "../app/assets/Circle.svg";
import Star from "../app/assets/Star.svg";
import CashBank from "../app/assets/tabler-icon-cash-banknote.svg";
import HomeStats from "../app/assets/tabler-icon-home-stats.svg";
import Lock from "../app/assets/tabler-icon-lock.svg";
import Web3Excellence from "../app/assets/web3-excellence.svg";
import Metamask from "../app/assets/metamask.svg";
import Rainbow from "../app/assets/rainbow.svg";
import Coinbase from "../app/assets/coinbase.svg";
import WalletConnect from "../app/assets/wallet-connect.svg";
import BigCircleProduct from "../app/assets/big-circle-product.svg";
import Empower from "../app/assets/Empower.svg";
import SmallCircle1 from "../app/assets/small-circle-product-1.svg";
import SmallCircle2 from "../app/assets/small-circle-product-2.svg";
import Billing from "../app/assets/billing.jpg";
import Scheduled from "../app/assets/scheduled.jpg";
import Checked from "../app/assets/checked-icon.svg";

import { IconsDock, IconsOrbit } from "./assets";

const Home: FC = () => {
  //const videoRef = useRef<HTMLDivElement>(null);
  //const videoDialogRef = useRef<any>(null); // Adjust type as necessary

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       console.log("Intersection Observer Entry:", entry); // Debug log
  //       if (entry.isIntersecting) {
  //         console.log("Playing video..."); // Debug log
  //         videoDialogRef.current?.play(); // Call the play method
  //       }
  //     },
  //     { threshold: 0 } // Adjust threshold as needed
  //   );

  //   if (videoRef.current) {
  //     observer.observe(videoRef.current);
  //   }

  //   return () => {
  //     if (videoRef.current) {
  //       observer.unobserve(videoRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <GridPattern
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(transparent,white,transparent)] z-20"
        )}
      />
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-sm md:px-32">
        <Image src={LOGO} alt="Actalink Logo" />
        <nav className="flex space-x-6 items-center">
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1hAiMCumWnwtP72265wa8nD03-BLGtI7OATFFBVXQEL9CEUg0OvTnjliBCciglRO3VPNuVFZHy"
            className="text-gray-600 hidden md:block"
          >
            Schedule a Demo
          </a>
          <a
            href="#"
            className="text-gray-600"
            onClick={() => window.open("https://docs.acta.link/docs/")}
          >
            Docs
          </a>
          <Button
            className="hidden md:block hover:bg-[#B5EF21] hover:text-black border hover:border-black"
            onClick={() => window.open("https://dapp.acta.link/")}
          >
            Launch App
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 bg-white px-8 sm:px-8 md:px-16 lg:px-32 xl:px-32 gap-40">
        <div className="flex-1 text-left">
          <h1
            style={{
              lineHeight: 1.6,
            }}
            className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium mb-6 text-[#0D0D0D] text-center xl:text-start"
          >
            Empower Your Finances with <br /> Seamless Crypto Payments
          </h1>
          <p className="text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl text-gray-600 mb-6 leading-relaxed text-center xl:text-start">
            Actalink simplifies crypto transfers and scheduling, making Web3
            financial management easier than ever.
          </p>
          <div className="flex flex-col xl:flex-row items-center xl:items-start space-y-4 md:space-y-0 space-x-0 md:space-x-4 gap-2">
            <ArrowButton
              label="Launch App"
              backgroundColor={"#B5EF21"}
              isTransparent={false}
              handleClick={() => window.open("https://dapp.acta.link/")}
            />
            <ArrowButton
              label="Schedule a Demo"
              isTransparent
              handleClick={() =>
                window.open(
                  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1hAiMCumWnwtP72265wa8nD03-BLGtI7OATFFBVXQEL9CEUg0OvTnjliBCciglRO3VPNuVFZHy"
                )
              }
            />
          </div>
        </div>

        {/* Card Section */}
        <div
          style={{
            zIndex: 30,
          }}
          className="hidden xl:flex flex-1 overflow-hidden flex-col justify-center px-10 py-10 bg-white max-h-[451px] max-w-[453px] rounded-2xl border-4 border-solid border-stone-950 shadow-[-4px_4px_0px_rgba(181,239,33,1),-8px_8px_0px_#000]"
        >
          <Image
            loading="lazy"
            src={Empower}
            alt={"altText"}
            className="object-contain w-full aspect-square"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 bg-white overflow-hidden xl:px-32">
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 px-[10px]">
          {/* Card 1 */}
          <div className="relative z-20 flex-1 min-h-[min-content] flex">
            {/* Decorative Circle */}
            <div className="absolute top-0 left-0 transform -translate-y-14 -translate-x-14 z-[-1]">
              <Image src={Circle} alt="Circle" />
            </div>
            <div className="background-glass bg-transparent border border-gray-300 p-6 rounded-lg relative flex flex-col justify-between h-full w-full">
              <div>
                <Image src={Lock} alt="Icon" />
                <h3 className="font-bold text-xl mt-4">Security Simplified</h3>
                <p className="text-gray-600 mt-2">
                  No extra worries or keys, just secure transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative z-20 flex-1 min-h-[min-content] flex">
            <div className="bg-white border border-gray-300 p-6 rounded-lg flex flex-col justify-between h-full w-full">
              <div>
                <Image src={HomeStats} alt="Icon" />
                <h3 className="font-bold text-xl mt-4">Business First</h3>
                <p className="text-gray-600 mt-2">
                  Crafted for businesses, not just developers.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative z-20 flex-1 min-h-[min-content] flex">
            {/* Decorative Star */}
            <div className="absolute bottom-0 right-0 transform translate-y-12 translate-x-12 z-[-1]">
              <Image src={Star} alt="Star" />
            </div>
            <div className="background-glass bg-transparent border border-gray-300 p-6 rounded-lg relative flex flex-col justify-between h-full w-full">
              <div>
                <Image src={CashBank} alt="Icon" />
                <h3 className="font-bold text-xl mt-4">Unrestricted Assets</h3>
                <p className="text-gray-600 mt-2">
                  No asset blocking for automation, unlike Smart Vaults.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Wallets & Services */}
      <section className="py-14 bg-white px-32">
        <div className="justify-between items-center flex flex-col lg:flex-row gap-10">
          <Image height={64} width={224} src={Metamask} alt="Metamask" />
          <Image
            height={74}
            width={148}
            className="rounded"
            src={Coinbase}
            alt="Coinbase Wallet"
          />
          <Image
            height={72}
            width={272}
            src={WalletConnect}
            alt="WalletConnect"
          />
          <Image
            className="w-[41px] h[40px] sm:w-[71px] sm:h-[71px]"
            src={Rainbow}
            alt="Rainbow"
          />
        </div>
      </section>

      {/* Products Section */}
      <section
        //ref={videoRef}
        className="relative py-16 bg-white overflow-hidden xl:px-32"
      >
        <GridPattern
          className={cn(
            "absolute inset-0 [mask-image:linear-gradient(transparent,white,transparent)] z-0"
          )}
        />
        {/* Decorative Elements */}
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block absolute top-0 left-0 transform -translate-y-10 translate-x-6">
          <Image src={SmallCircle2} alt="Circle Decorative" />
        </div>
        <div
          style={{
            zIndex: 100,
          }}
          className="hidden sm:hidden md:hidden lg:hidden xl:block absolute top-0 left-0 transform -translate-y-0 translate-x-24"
        >
          <Image src={SmallCircle1} alt="Circle Decorative" />
        </div>
        <div className="absolute bottom-0 right-0 transform translate-y-8 translate-x-32">
          <Image src={BigCircleProduct} alt="Big Circle Product" />
        </div>

        <div className="background-glass border border-gray-200 p-8 relative rounded-xl mx-[10px]">
          {/* Section Title with Border Line */}
          <div className="justify-start items-center gap-4 flex mb-6">
            <h2 className="text-end text-[#8c8c8c] text-xl font-semibold relative">
              Products
            </h2>
            <div
              style={{
                borderWidth: "0.5px",
              }}
              className="grow shrink basis-0 h-px border-[#e6e6e6] self-center"
            ></div>
          </div>

          {/* First Product: Schedule Payments */}
          <div className="flex flex-col md:flex-row md:justify-between mb-12 gap-6 p-0 md:p-10">
            {/* Left: Description */}
            <div className="flex-1 flex-col justify-between items-start flex md:mb-10 md:self-center">
              <div className="justify-start items-start sm:items-center flex flex-col sm:flex-row w-full gap-2 mb-4">
                <div className="text-[#333333] text-3xl font-semibold order-first">
                  Schedule Payments
                </div>
                <div
                  style={{
                    borderWidth: "0.5px",
                  }}
                  className="w-full sm:w-12 h-px rotate-0 sm:rotate-90 border border-[#333333] order-3 sm:order-2"
                ></div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex order-4 sm:order-3">
                  <div className="self-stretch text-[#333333] text-base font-semibold leading-normal">
                    Recurring
                  </div>
                  <div className="self-stretch text-[#333333] text-base font-semibold leading-normal">
                    One-Time{" "}
                  </div>
                </div>

                <p className="opacity-80 text-[#666666] order-2 sm:order-las block sm:hidden">
                  Automate your transfers
                </p>
              </div>
              <p className="opacity-80 text-[#666666] mb-4 hidden sm:block">
                Automate your transfers
              </p>
              <div className="mb-4">
                <ul>
                  <li className="flex items-center mb-2">
                    <Image src={Checked} alt="Checked icon" className="mr-2" />
                    Automated transfers from any Web3 wallet
                  </li>
                  <li className="flex items-center mb-2">
                    <Image src={Checked} alt="Checked icon" className="mr-2" />
                    Enable one-time or recurring schedules
                  </li>
                  <li className="flex items-center mb-2">
                    <Image src={Checked} alt="Checked icon" className="mr-2" />
                    Non-custodial for full asset control
                  </li>
                </ul>
              </div>
              <div className="justify-start items-center gap-px inline-flex mb-10">
                <Button
                  onClick={() => window.open("https://dapp.acta.link/")}
                  className="bg-black text-white px-4 py-2 hover:bg-[#B5EF21] hover:text-black border hover:border-black"
                >
                  Try It Now
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      "https://actalink.notion.site/Actalink-Scheduled-Payment-1a0cd8a25588461499d0aa85133de652?pvs=4"
                    )
                  }
                  variant="outline"
                  className="ml-4 border-black text-black px-4 py-2"
                >
                  Notion Handbook
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex flex-1 justify-center md:justify-end">
              {/* <HeroVideoDialog
                ref={videoDialogRef} // Attach ref here
                className="dark:hidden block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                ref={videoDialogRef} // Attach ref here
                className="hidden dark:block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video"
              /> */}
              <Image src={Scheduled} alt="Scheduled Payments" />
            </div>
          </div>

          {/* Second Product: Billing */}
          <div className="flex flex-col-reverse md:flex-row md:justify-between mb-12 gap-6 p-0 md:p-10">
            {/* Right: Image */}
            <div className="flex flex-1 justify-center md:justify-start">
              {/* <HeroVideoDialog
                ref={videoDialogRef} // Attach ref here
                className="dark:hidden block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                ref={videoDialogRef} // Attach ref here
                className="hidden dark:block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video"
              /> */}
              <Image src={Billing} alt="Billing" />
            </div>

            {/* Left: Description */}
            <div className="flex-1 flex-col justify-between items-start flex xl:mb-10 xl:self-center mt-10">
              <div className="justify-start items-start sm:items-center flex mb-4 flex-col sm:flex-row w-full gap-2">
                <div className="text-[#333333] text-3xl font-semibold order-first">
                  Billing
                </div>
                <div
                  style={{
                    borderWidth: "0.5px",
                  }}
                  className="w-full sm:w-12 h-px rotate-0 sm:rotate-90 border border-[#333333] order-3 sm:order-2"
                ></div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex order-4 sm:order-3">
                  <div className="self-stretch text-[#333333] text-base font-semibold leading-normal">
                    Subscription
                  </div>
                  <div className="self-stretch text-[#333333] text-base font-semibold leading-normal">
                    One-Time Invoice
                  </div>
                </div>
                <p className="opacity-80 text-[#666666] order-2 sm:order-last block sm:hidden">
                  Effortlessly manage subscriptions and recurring payments
                </p>
              </div>
              <p className="opacity-80 text-[#666666] hidden sm:block mb-4">
                Effortlessly manage subscriptions and recurring payments
              </p>

              <div className="mb-4">
                <ul>
                  <li className="flex items-center mb-2">
                    <Image src={Checked} alt="Checked icon" className="mr-2" />
                    Effortless subscriptions and invoicing
                  </li>
                  <li className="flex items-center mb-2">
                    <Image src={Checked} alt="Checked icon" className="mr-2" />
                    No asset blocking or third-party permissions
                  </li>
                  <li className="flex items-center mb-2">
                    <Image src={Checked} alt="Checked icon" className="mr-2" />
                    Easy merchant setup with links or API
                  </li>
                </ul>
              </div>
              <div className="justify-start items-center gap-px inline-flex mb-12">
                <Button
                  onClick={() => window.open("https://dapp.acta.link/")}
                  className="bg-black text-white px-4 py-2 hover:bg-[#B5EF21] hover:text-black border hover:border-black"
                >
                  Try It Now
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      "https://actalink.notion.site/Actalink-Billing-e81b44491da5422f907ecb814bfb257e?pvs=4"
                    )
                  }
                  variant="outline"
                  className="ml-4 border-black text-black px-4 py-2"
                >
                  Notion Handbook
                </Button>
              </div>
            </div>
          </div>

          {/* Third Product: Auto Deposit */}
          <div className="grid grid-cols-1 md:grid-cols-2 mb-12 p-0 md:p-10">
            {/* Left: Description */}
            <div className="flex-col justify-start items-start gap-2 inline-flex xl:self-center xl:mb-4">
              <div className="justify-start items-center gap-4 inline-flex">
                <div
                  onClick={() =>
                    window.open(
                      "https://actalink.notion.site/Actalink-Auto-Deposit-e286a49e368b46d79e023004711369f2?pvs=4"
                    )
                  }
                  className="text-[#333333] text-3xl font-semibold leading-10 cursor-pointer"
                >
                  Auto Deposit
                </div>
                <div className="p-px justify-center items-center flex">
                  <div className="px-4 bg-white rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-[#0d0d0d] justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-[#0d0d0d] text-base font-normal">
                      Upcoming
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-80 text-[#666666] text-xl font-medium mb-4">
                Maintain wallet balance easily.
              </div>
            </div>

            <div className="flex justify-center md:justify-start md:px-8 xl:self-center">
              <ul>
                <li className="flex items-center mb-2">
                  <Image src={Checked} alt="Checked icon" className="mr-2" />
                  Never run out of funds with auto top-ups
                </li>
                <li className="flex items-center mb-2">
                  <Image src={Checked} alt="Checked icon" className="mr-2" />
                  Integration with existing wallets and coins
                </li>
                <li className="flex items-center mb-2">
                  <Image src={Checked} alt="Checked icon" className="mr-2" />
                  Flexible setup, adjustable anytime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Leading Chains and Wallets */}
      <section className="py-16 bg-gray-50 text-center bg-white">
        <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <div
            style={{
              lineHeight: 4,
              zIndex: 20,
            }}
            className="text-center"
          >
            <span className="text-[#333333] text-5xl font-medium">
              Supporting Leading
              <br />
            </span>
            <span className="text-5xl font-medium bg-gradient-to-r from-[#217005] to-[#92C60F] inline-block text-transparent bg-clip-text">
              Chains and Wallets
            </span>
          </div>

          {/* Inner Circles */}
          <OrbitingCircles
            className="size-[30px] border-none z-10"
            duration={20}
            delay={20}
            radius={80}
          >
            <IconsOrbit.MetamaskSmall />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none z-10"
            duration={20}
            delay={10}
            radius={190}
          >
            <IconsOrbit.H />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={19}
            reverse
          >
            <IconsOrbit.W />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={33}
            reverse
          >
            <IconsOrbit.Infinity />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={29}
            reverse
          >
            <IconsOrbit.LDot />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={36}
            reverse
          >
            <IconsOrbit.Dot />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={45}
            reverse
          >
            <IconsOrbit.Ethereum />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={62}
            reverse
          >
            <IconsOrbit.RainbowSmall />
          </OrbitingCircles>
        </div>
      </section>

      {/* Empower Your Business Section */}
      <section className="relative py-24 bg-white text-center">
        {/* Background grid pattern */}
        <GridPattern
          y={0}
          x={100}
          className={cn(
            "absolute inset-0 [mask-image:linear-gradient(transparent,white,transparent)] z-0"
          )}
        />
        <div className="relative z-10">
          {/* Tombol Get Started */}
          <div className="flex justify-center">
            <div className="border border-black rounded-[10px] text-black px-6 py-2 bg-transparent">
              Get Started
            </div>
          </div>

          {/* Heading dengan border pada Web3 Excellence */}
          <h2 className="text-5xl font-semibold mt-8 mb-4 text-[#0D0D0D]">
            Empower Your Business with <br />
            <span className="inline-block px-4 py-2 mt-2">
              <Image src={Web3Excellence} alt="Web3 Excellence" />
            </span>
          </h2>

          {/* Tombol Schedule a Demo */}
          <div className="mt-8 flex justify-center">
            <ArrowButton
              label="Schedule a Demo"
              backgroundColor={"#B5EF21"}
              handleClick={() =>
                window.open(
                  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1hAiMCumWnwtP72265wa8nD03-BLGtI7OATFFBVXQEL9CEUg0OvTnjliBCciglRO3VPNuVFZHy"
                )
              }
            />
          </div>
        </div>
      </section>

      <footer className="py-8 bg-white text-center md:text-left flex flex-col xl:flex-row justify-between items-center px-32">
        {/* Logo dan Copyright */}
        <div className="flex flex-col items-center xl:items-start">
          <Image src={LOGO} alt="Actalink Logo" className="mb-4" />
          <p className="text-gray-600 text-nowrap">
            &copy; Actalink Ltd 2024. All rights reserved.
          </p>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-left md:text-center space-x-0 my-6 text-gray-600 gap-6">
          <a href="https://docs.acta.link/docs/" className="hover:text-black">
            Docs
          </a>
          <a
            href="mailto:pr@acta.link"
            className="hover:text-black text-nowrap"
          >
            Contact Us
          </a>
          <a
            href="mailto:pr@acta.link"
            className="hover:text-black text-nowrap"
          >
            Privacy Policy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0 p-2 border rounded-lg">
          <div>
            <IconsDock.discord
              onClick={() =>
                window.open("https://discord.com/invite/tVRPdXkwKP")
              }
              className="size-8 cursor-pointer"
            />
          </div>
          <div>
            <IconsDock.linkedin
              onClick={() =>
                window.open("https://www.linkedin.com/company/actalink/")
              }
              className="size-8 cursor-pointer"
            />
          </div>
          <div>
            <IconsDock.twitter
              onClick={() => window.open("https://x.com/0xActalink")}
              className="size-6 cursor-pointer"
            />
          </div>
          <div>
            <IconsDock.telegram
              className="size-8 cursor-pointer"
              onClick={() => window.open("https://t.me/+tPhqr0mc4C5iY2Zl")}
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
