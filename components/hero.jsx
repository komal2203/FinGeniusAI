"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center ">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 bg-gradient-to-br from-blue-700  to-purple-500 text-transparent bg-clip-text tracking-tighter font-bold pr-2">
          Your Financial Co‑Pilot <br /> Powered by AI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          FinGeniusAI helps you make smarter money decisions with AI-powered
          insights and personalized financial advice. Whether you're tracking
          expenses, budgeting, or planning for the future, we've got you
          covered.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-gradient-to-br from-blue-700  to-purple-500 hover:brightness-130">
              Get Started
            </Button>
          </Link>
          {/* <Link href="/dashboard">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link> */}
        </div>

        <div className="hero-image-wrapper pt-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-[100%] col-span-2 w-full">
              <Image
                src="/hero1.avif"
                width={1100}
                height={620}
                alt="Dashboard preview"
                className="rounded-lg shadow-2xl hover:brightness-120  border mx-auto"
                priority
              /></div>
            <div className="flex flex-col justify-between h-full w-full">
              <Image
                src="/hero2.png"
                width={1100}
                height={620}
                alt="Dashboard preview"
                className="rounded-lg hover:brightness-120 shadow-2xl  border mx-auto h-[48%]"
                priority
              />
              <Image
                src="/hero3.jpg"
                width={1100}
                height={620}
                alt="Dashboard preview"
                className="rounded-lg hover:brightness-105 shadow-2xl  border mx-auto h-[48%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
