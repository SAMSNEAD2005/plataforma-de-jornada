"use client";

import { useState } from "react";

export default function PayrollForm() {
  const [startTime, setStartTime] = useState("");

  const [endTime, setEndTime] = useState("");

  const [hourlyRate, setHourlyRate] = useState("");
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);
  async function handleSubmit(e: any) {
    e.preventDefault();

    setLoading(true);

    setSuccess(false);

    await fetch("http://localhost:3001/work-session/calculate", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        startTime,
        endTime,
        hourlyRate: Number(hourlyRate),
      }),
    });

    setLoading(false);

    setSuccess(true);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
        backdrop-blur
        mb-10
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          mb-6
        "
      >
        Calculate Payroll
      </h2>

      <div
        className="
          grid
          md:grid-cols-3
          gap-6
        "
      >
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="
            bg-[#0f172a]
            border
            border-white/10
            rounded-2xl
            p-4
            outline-none
          "
        />

        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="
            bg-[#0f172a]
            border
            border-white/10
            rounded-2xl
            p-4
            outline-none
          "
        />

        <input
          type="number"
          placeholder="Hourly Rate"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          className="
            bg-[#0f172a]
            border
            border-white/10
            rounded-2xl
            p-4
            outline-none
          "
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="
    mt-6
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    px-8
    py-4
    rounded-2xl
    font-bold
    hover:scale-105
    transition
    disabled:opacity-50
  "
      >
        {loading ? "Calculating..." : "Calculate Payroll"}
      </button>
      {success && (
        <p
          className="
      text-green-400
      mt-4
      font-medium
    "
        >
          Payroll calculated successfully 🚀
        </p>
      )}
    </form>
  );
}
