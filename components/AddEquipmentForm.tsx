"use client";

import { useState } from "react";

export default function AddEquipmentForm() {
  const [serialNumber, setSerialNumber] = useState("");
  const [productName, setProductName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/equipment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ serialNumber, productName }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(`✅ Added equipment with ID: ${data.id}`);
      setSerialNumber("");
      setProductName("");
    } else {
      setMessage(`❌ Error: ${data.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Serial Number"
        value={serialNumber}
        onChange={(e) => setSerialNumber(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add Equipment
      </button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
}