"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RevenueChart({ sessions }: any) {
  const data = sessions?.data?.map((session: any) => ({
    name: `#${session.id}`,
    revenue: session.totalPayment,
  }));

  return (
    <div
      className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
        backdrop-blur
        mt-10
      "
    >
      <div className="mb-6">
        <h2
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          Revenue Analytics
        </h2>

        <p className="text-gray-400 mt-2">Real-time payroll revenue</p>
      </div>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#06b6d4"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
