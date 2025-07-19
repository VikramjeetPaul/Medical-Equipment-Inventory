"use client";

import { useState } from "react";

export default function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error calling AI");
      } else {
        setResponse(data.text);
      }
    } catch (err) {
      setError("Network error");
    }

    setLoading(false);
  }

  return (
    <div className="p-6 bg-blue-50 rounded-lg shadow-md border border-gray-200 w-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        <span aria-label="robot emoji" role="img" className="mr-2">🤖</span>
        Ask AI about Inventory
      </h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your question here..."
          required
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Asking AI..." : "Ask AI"}
        </button>
      </form>

      {error && (
        <div className="text-red-600 font-semibold mb-2">{error}</div>
      )}

      {response && (
        <div className="bg-gray-100 p-3 rounded-md whitespace-pre-wrap">
          <strong>AI Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}