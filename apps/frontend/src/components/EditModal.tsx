"use client";

import { useState } from "react";

export default function EditModal({ session }: any) {
  const [open, setOpen] = useState(false);

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
    <>
      <button
        onClick={() => setOpen(true)}
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
        Edit
      </button>

      {open && (
        <div
          className="
            fixed
            inset-0
            bg-black/70
            backdrop-blur-sm
            flex
            items-center
            justify-center
            z-50
          "
        >
          <div
            className="
              bg-[#0f172a]
              border
              border-white/10
              rounded-3xl
              p-8
              w-[450px]
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                mb-6
              "
            >
              Edit Session
            </h2>

            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className="
                w-full
                bg-[#020617]
                border
                border-white/10
                rounded-2xl
                p-4
                outline-none
                mb-6
              "
            />

            <div
              className="
                flex
                justify-end
                gap-4
              "
            >
              <button
                onClick={() => setOpen(false)}
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-white/5
                "
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  font-bold
                "
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
