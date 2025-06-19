"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center ">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-tighter">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p>
          FinGeniusAI helps you make smarter money decisions with AI-powered
          insights and personalized financial advice. Whether you're tracking
          expenses, budgeting, or planning for the future, we've got you
          covered.
        </p>
        <div>
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>

        <div>
          <div>
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;