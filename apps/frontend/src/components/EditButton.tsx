"use client";

import { useState } from "react";

export default function EditButton({ session }: any) {
  const [hourlyRate, setHourlyRate] = useState(session.hourlyRate);

  async function handleUpdate() {
    await fetch(`http://localhost:3001/work-session/${session.id}`, {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        hourlyRate: Number(hourlyRate),
      }),
    });

    window.location.reload();
  }

  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      <input
        type="number"
        value={hourlyRate}
        onChange={(e) => setHourlyRate(e.target.value)}
        className="
          bg-[#0f172a]
          border
          border-white/10
          rounded-xl
          px-3
          py-2
          w-28
          outline-none
        "
      />

      <button
        onClick={handleUpdate}
        className="
          px-4
          py-2
          rounded-xl
          bg-cyan-500/10
          border
          border-cyan-400/20
          text-cyan-300
          hover:bg-cyan-500/20
          transition
        "
      >
        Save
      </button>
    </div>
  );
}
