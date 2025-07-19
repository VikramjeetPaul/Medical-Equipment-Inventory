"use client";

import React, { useState, useMemo } from "react";
import { ResourceWrapper } from "@/types/resource";

type Props = {
  data: ResourceWrapper[];
};

function getCategory(productName: string): string {
  const name = productName.toLowerCase();
  if (name.includes("mri") || name.includes("x-ray") || name.includes("ultrasound") || name.includes("endoscope")) return "Imaging";
  if (name.includes("monitor") || name.includes("ecg") || name.includes("defibrillator")) return "Monitoring";
  if (name.includes("pump") || name.includes("anesthesia")) return "Therapy";
  if (name.includes("sterilizer") || name.includes("blood warmer") || name.includes("dialysis")) return "Support";
  return "General";
}

function getBadgeColor(category: string): string {
  switch (category) {
    case "Imaging":
      return "bg-blue-200 text-black";
    case "Monitoring":
      return "bg-green-200 text-black";
    case "Therapy":
      return "bg-purple-200 text-black";
    case "Support":
      return "bg-yellow-200 text-black";
    default:
      return "bg-gray-200 text-black";
  }
}

export default function ResourceTable({ data }: Props) {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      (item.productName + item.manufacturer + item.serialNumber)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, data]);

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-15 p-4 rounded-xl shadow-md mt-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <h2 className="text-xl font-bold mb-4 text-gray-800">📋 Equipment Inventory</h2>
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto max-h-[500px] rounded-lg border border-gray-300 bg-white">
        <table className="min-w-full text-sm text-left table-auto">
          <thead className="bg-blue-200 text-gray-900 sticky top-0 z-10">
            <tr>
              <th className="p-2">Serial No.</th>
              <th className="p-2">Product</th>
              <th className="p-2">Category</th>
              <th className="p-2">FDA #</th>
              <th className="p-2">Description</th>
              <th className="p-2">Manufacturer</th>
              <th className="p-2">Barcode</th>
              <th className="p-2 text-right">Value</th>
              <th className="p-2 text-right">Qty</th>
              <th className="p-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {filteredData.map((item, index) => {
              const category = getCategory(item.productName);
              const badgeColor = getBadgeColor(category);
              return (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="p-2">{item.serialNumber}</td>
                  <td className="p-2 font-medium">{item.productName}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeColor}`}>
                      {category}
                    </span>
                  </td>
                  <td className="p-2">{item.fdaApprovalNumber}</td>
                  <td className="p-2 text-xs text-gray-600">{item.shortDescription}</td>
                  <td className="p-2">{item.manufacturer}</td>
                  <td className="p-2">{item.barcodeNumber}</td>
                  <td className="p-2 text-right">${item.itemValue.toLocaleString()}</td>
                  <td className="p-2 text-right">{item.quantity}</td>
                  <td className="p-2 text-right font-semibold text-green-600">
                    ${item.totalValue.toLocaleString()}
                  </td>
                </tr>
              );
            })}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={10} className="p-4 text-center text-gray-500">
                  No matching equipment found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}