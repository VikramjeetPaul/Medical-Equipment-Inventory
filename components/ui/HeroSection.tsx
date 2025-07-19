"use client";

import Image from "next/image";
import heroImage from "@/assets/illustrations/hero-medical.svg";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 md:p-12 bg-blue-50 rounded-2xl shadow-lg">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
          Medical Equipment Inventory Tracker
        </h1>
        <p className="text-lg text-blue-700">
          A full-stack dashboard to monitor, manage, and track your medical equipment efficiently.
        </p>
      </div>
      <div className="flex-1">
        <Image src={heroImage} alt="Medical Illustration" className="w-full h-auto" />
      </div>
    </section>
  );
}