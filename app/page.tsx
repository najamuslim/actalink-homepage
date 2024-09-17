"use client";
import { FC, useRef, useEffect } from "react";
import React from "react";
import ArrowButton from "../components/custom/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
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

import { IconsDock, IconsOrbit } from "./assets";

import { Dock, DockIcon } from "@/components/magicui/dock";

const Home: FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const videoDialogRef = useRef<any>(null); // Adjust type as necessary

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection Observer Entry:", entry); // Debug log
        if (entry.isIntersecting) {
          console.log("Playing video..."); // Debug log
          videoDialogRef.current?.play(); // Call the play method
        }
      },
      { threshold: 0 } // Adjust threshold as needed
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <GridPattern
        x={-1}
        y={100}
        className={cn(
          "[mask-image:linear-gradient(transparent,white,transparent)] "
        )}
      />
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-sm md:px-32">
        <Image src={LOGO} alt="Actalink Logo" />
        <nav className="flex space-x-6 items-center">
          <a href="#" className="text-gray-600 hidden md:block">
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
            className="hidden md:block hover:bg-[#B5EF21] hover:text-black"
            onClick={() => window.open("https://dapp.acta.link/")}
          >
            Launch App
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 bg-white px-32 md:px-32 gap-40">
        <div className="flex-1 text-left">
          <h1
            style={{
              lineHeight: 1.6,
            }}
            className="text-5xl md:text-5xl font-medium mb-6 text-[#0D0D0D]"
          >
            Empower Your Finances with <br /> Seamless Crypto Payments
          </h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Actalink simplifies crypto transfers and scheduling, making Web3
            financial management easier than ever.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <ArrowButton
              label="Launch App"
              backgroundColor={"#B5EF21"}
              isTransparent={false}
              handleClick={() => window.open("https://dapp.acta.link/")}
            />
            <ArrowButton
              label="Schedule a Demo"
              isTransparent
              handleClick={() => window.open("mailto:pr@acta.link")}
            />
          </div>
        </div>

        {/* Card Section */}
        <div
          style={{
            zIndex: 10,
          }}
          className="hidden xl:flex flex-1 overflow-hidden flex-col justify-center px-10 py-10 bg-white rounded-2xl border-4 border-solid border-stone-950 max-w-[453px] shadow-[-4px_4px_0px_rgba(181,239,33,1)]"
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
      <section className="relative py-16 bg-white z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            {/* Decorative Circle */}
            <div
              style={{
                zIndex: -1,
              }}
              className="absolute top-0 left-0 transform -translate-y-14 -translate-x-14"
            >
              <Image src={Circle} alt="Circle" />
            </div>
            <div
              style={{ zIndex: 10 }}
              className="background-glass bg-transparent border border-gray-300 p-6 rounded-lg relative"
            >
              <Image src={Lock} alt="Icon" />
              <h3 className="font-bold text-xl mt-4">Security Simplified</h3>
              <p className="text-gray-600 mt-2">
                No extra worries or keys, just secure transactions.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 p-6 rounded-lg">
            <Image src={HomeStats} alt="Icon" />
            <h3 className="font-bold text-xl mt-4">Business First</h3>
            <p className="text-gray-600 mt-2">
              Crafted for businesses, not just developers.
            </p>
          </div>
          <div className="relative">
            {/* Decorative Star */}
            <div className="absolute bottom-0 right-0 transform translate-y-12 translate-x-12">
              <Image src={Star} alt="Star" />
            </div>
            <div
              style={{
                zIndex: 10,
              }}
              className="background-glass bg-transparent border border-gray-300 p-6 rounded-lg relative"
            >
              <Image src={CashBank} alt="Icon" />
              <h3 className="font-bold text-xl mt-4">Unrestricted Assets</h3>
              <p className="text-gray-600 mt-2">
                No asset blocking for automation, unlike Smart Vaults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Wallets & Services */}
      <section className="py-16 bg-white px-32">
        <div className="justify-between items-center flex flex-col md:flex-row gap-6">
          <Image src={Metamask} alt="Metamask" />
          <Image src={Coinbase} alt="Coinbase Wallet" />
          <Image src={WalletConnect} alt="WalletConnect" />
          <Image src={Rainbow} alt="Rainbow" />
        </div>
      </section>

      {/* Products Section */}
      <section
        ref={videoRef}
        className="relative py-16 bg-white overflow-hidden"
      >
        <GridPattern
          className={cn(
            "absolute inset-0 [mask-image:linear-gradient(transparent,white,transparent)] z-0"
          )}
        />
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 transform -translate-y-10 translate-x-6">
          <Image src={SmallCircle2} alt="Circle Decorative" />
        </div>
        <div
          style={{
            zIndex: 100,
          }}
          className="absolute top-0 left-0 transform -translate-y-0 translate-x-24"
        >
          <Image src={SmallCircle1} alt="Circle Decorative" />
        </div>
        <div className="absolute bottom-0 right-0 transform translate-y-8 translate-x-32">
          <Image src={BigCircleProduct} alt="Big Circle Product" />
        </div>

        <div className="background-glass max-w-6xl mx-auto border border-gray-200 p-6 relative rounded-xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2 mb-12 mt-16 xl:flex-col">
            {/* Left: Description */}
            <div className="flex-col justify-between items-start flex md:mb-10 md:self-center">
              <div className="justify-start items-center flex">
                <div className="text-[#333333] text-3xl font-semibold">
                  Schedule Payments
                </div>
                <div
                  style={{
                    borderWidth: "0.5px",
                  }}
                  className="w-12 h-px rotate-90 border border-[#333333]"
                ></div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-[#333333] text-base font-semibold leading-normal">
                    Recurring
                  </div>
                  <div className="self-stretch text-[#333333] text-base font-semibold leading-normal">
                    One-Time{" "}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Automate your transfers</p>
              <div className="mb-4">
                <ul>
                  <li className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                    Automated transfers from any Web3 wallet
                  </li>
                  <li className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                    Enable one-time or recurring schedules
                  </li>
                  <li className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                    Non-custodial for full asset control
                  </li>
                </ul>
              </div>
              <div className="justify-start items-center gap-px inline-flex mb-10">
                <Button className="bg-black text-white px-4 py-2">
                  Continue to App
                </Button>
                <Button
                  variant="outline"
                  className="ml-4 border-black text-black px-4 py-2"
                >
                  Notion Handbook
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center md:justify-end">
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
          <div className="grid grid-cols-1 md:grid-cols-2 mb-12 xl:flex-col-reverse">
            {/* Right: Image */}
            <div className="flex justify-center md:justify-start">
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
              <Image height={400} width={588} src={Billing} alt="Billing" />
            </div>

            {/* Left: Description */}
            <div className="flex-col justify-between items-start flex px-8 xl:mb-10 xl:self-center mt-10">
              <div className="justify-start items-center flex mb-4">
                <div className="text-[#333333] text-3xl font-semibold">
                  Billing
                </div>
                <div
                  style={{
                    borderWidth: "0.5px",
                  }}
                  className="w-12 h-px rotate-90 border border-[#333333]"
                ></div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-[#333333] text-base font-semibold leading-normal">
                    Subscription
                  </div>
                  <div className="self-stretch text-[#333333] text-base font-semibold leading-normal">
                    One-Time Invoice
                  </div>
                </div>
              </div>
              <p className="opacity-80 text-[#666666] text-xl font-medium mb-4">
                Effortlessly manage subscriptions and recurring payments
              </p>
              <div className="mb-4">
                <ul>
                  <li className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                    Effortless subscriptions and invoicing
                  </li>
                  <li className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                    No asset blocking or third-party permissions
                  </li>
                  <li className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                    Easy merchant setup with links or API
                  </li>
                </ul>
              </div>
              <div className="justify-start items-center gap-px inline-flex">
                <Button className="bg-black text-white px-4 py-2">
                  Continue to App
                </Button>
                <Button
                  variant="outline"
                  className="ml-4 border-black text-black px-4 py-2"
                >
                  Notion Handbook
                </Button>
              </div>
            </div>
          </div>

          {/* Third Product: Auto Deposit */}
          <div className="grid grid-cols-1 md:grid-cols-2 mb-12">
            {/* Left: Description */}
            <div className="flex-col justify-start items-start gap-2 inline-flex xl:self-center xl:mb-4">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="text-[#333333] text-3xl font-semibold leading-10">
                  Auto Deposit
                </div>
                <div className="p-px justify-center items-center flex">
                  <div className="px-4 bg-white rounded shadow border border-[#0d0d0d] justify-center items-center gap-2 inline-flex">
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

            <div className="flex justify-center md:justify-start px-8 xl:self-center">
              <ul>
                <li className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                  Never run out of funds with auto top-ups
                </li>
                <li className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                  Integration with existing wallets and coins
                </li>
                <li className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
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
            delay={10}
            reverse
          >
            <IconsOrbit.LDot />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={40}
            reverse
          >
            <IconsOrbit.Dot />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={20}
            reverse
          >
            <IconsOrbit.W />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={30}
            reverse
          >
            <IconsOrbit.Infinity />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={5}
            reverse
          >
            <IconsOrbit.LDot />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={35}
            reverse
          >
            <IconsOrbit.Dot />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={25}
            reverse
          >
            <IconsOrbit.Ethereum />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none z-10"
            radius={300}
            duration={20}
            delay={15}
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
            <Button className="border border-black text-black px-6 py-2 bg-transparent">
              Get Started
            </Button>
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
              handleClick={() => window.open("mailto:pr@acta.link")}
            />
          </div>
        </div>
      </section>

      <footer className="py-8 bg-white text-center md:text-left flex flex-col md:flex-row justify-between items-center px-32">
        {/* Logo dan Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={LOGO} alt="Actalink Logo" className="mb-4" />
          <p className="text-gray-600">
            &copy; Actalink Ltd 2024. All rights reserved.
          </p>
        </div>

        {/* Menu Links */}
        <div className="flex space-x-6 mt-4 text-gray-600">
          <a href="https://docs.acta.link/docs/" className="hover:text-black">
            Docs
          </a>
          <a href="mailto:pr@acta.link" className="hover:text-black">
            Support
          </a>
          <a href="mailto:pr@acta.link" className="hover:text-black">
            Contact Us
          </a>
          <a href="#" className="hover:text-black">
            Privacy Policy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Dock direction="middle">
            <DockIcon>
              <IconsDock.gitHub
                onClick={() => window.open("https://github.com/actalink")}
                className="size-6"
              />
            </DockIcon>
            <DockIcon>
              <IconsDock.linkedin
                onClick={() =>
                  window.open("https://www.linkedin.com/company/actalink/")
                }
                className="size-6"
              />
            </DockIcon>
            <DockIcon>
              <IconsDock.twitter
                onClick={() => window.open("https://x.com/0xActalink")}
                className="size-6"
              />
            </DockIcon>
            <DockIcon>
              <IconsDock.email
                onClick={() => (window.location.href = "mailto:pr@acta.link")}
                className="size-6"
              />
            </DockIcon>
          </Dock>
        </div>
      </footer>
    </div>
  );
};

export default Home;
