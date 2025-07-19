"use client";

import Image from "next/image";
import dashboardImage from "@/assets/illustrations/dashboard-equipment.svg";

export default function DashboardIllustration() {
  return (
    <div className="flex justify-center my-10">
      <Image src={dashboardImage} alt="Dashboard Illustration" className="max-w-md w-full" />
    </div>
  );
}
