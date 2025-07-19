"use client";

import { useState } from "react";

export default function AddEquipmentForm() {
  const [form, setForm] = useState({
    serialNumber: "",
    productName: "",
    fdaApprovalNumber: "",
    shortDescription: "",
    manufacturer: "",
    barcodeNumber: "",
    itemValue: "",
    quantity: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/equipment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({
        serialNumber: "",
        productName: "",
        fdaApprovalNumber: "",
        shortDescription: "",
        manufacturer: "",
        barcodeNumber: "",
        itemValue: "",
        quantity: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-blue-100 to-blue-15 p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800">➕ Add New Equipment</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "serialNumber",
          "productName",
          "fdaApprovalNumber",
          "shortDescription",
          "manufacturer",
          "barcodeNumber",
          "itemValue",
          "quantity",
        ].map((field) => (
          <input
            key={field}
            type={field === "itemValue" || field === "quantity" ? "number" : "text"}
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
            required={["serialNumber", "productName"].includes(field)}
          />
        ))}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
      >
        Submit
      </button>

      {success && (
        <p className="text-green-600 mt-2">✅ Equipment added successfully!</p>
      )}
    </form>
  );
}