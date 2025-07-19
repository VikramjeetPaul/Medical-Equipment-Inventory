"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Label,
} from "recharts";
import { ResourceWrapper } from "@/types/resource";

interface Props {
  data: ResourceWrapper[];
}

export default function Charts({ data }: Props) {
  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No data available for charts.
      </p>
    );
  }
  const aggregatedData = data.reduce((acc, item) => {
    const manufacturer = item.manufacturer ?? "Unknown";
    const existing = acc.find((d) => d.manufacturer === manufacturer);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      acc.push({ manufacturer, quantity: item.quantity });
    }
    return acc;
  }, [] as { manufacturer: string; quantity: number }[]);

  return (
    <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-10 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Equipment Quantity by Manufacturer
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={aggregatedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="manufacturer"
            interval={0}
            angle={-45}
            textAnchor="end"
          >
            <Label
              value="Manufacturer"
              offset={-60}
              position="insideBottom"
              style={{ fontWeight: "bold" }}
            />
          </XAxis>
          <YAxis>
            <Label
              value="Total Quantity"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle", fontWeight: "bold" }}
            />
          </YAxis>
          <Tooltip />
          <Bar dataKey="quantity" fill="#6c63ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}