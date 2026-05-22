import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import RevenueChart from "./RevenueChart";
import PayrollForm from "./PayrollForm";
import DeleteButton from "./DeleteButton";
import EditModal from "./EditModal";
async function getSessions() {
  const response = await fetch("http://localhost:3001/work-session");

  return response.json();
}

export default async function Dashboard() {
  const sessions = await getSessions();
  console.log(sessions);

  const totalRevenue =
    sessions?.data?.reduce(
      (acc: number, session: any) => acc + session.totalPayment,
      0,
    ) || 0;

  return (
    <main
      className="
    relative
    min-h-screen
    bg-[#020617]
    text-white
    overflow-hidden
  "
    >
      <div
        className="
    absolute
    top-[-200px]
    left-[-200px]
    w-[500px]
    h-[500px]
    bg-cyan-500/20
    blur-3xl
    rounded-full
  "
      />

      <div
        className="
    absolute
    bottom-[-200px]
    right-[-200px]
    w-[500px]
    h-[500px]
    bg-blue-700/20
    blur-3xl
    rounded-full
  "
      />
      <div className="flex relative z-10">
        <Sidebar />

        <div
          className="
          flex-1
          p-10
        "
        >
          <Topbar />
          <PayrollForm />

          <div
            className="
    grid
    grid-cols-1
    md:grid-cols-3
    gap-6
    mb-10
  "
          >
            <div
              className="
                bg-gradient-to-br
                from-cyan-500
                to-blue-700
                rounded-3xl
                p-8
                shadow-2xl
              "
            >
              <p className="text-cyan-100">Total Revenue</p>

              <h2
                className="
                  text-5xl
                  font-black
                  mt-4
                "
              >
                ${totalRevenue}
              </h2>
            </div>

            <div
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                backdrop-blur
              "
            >
              <p className="text-gray-400">Sessions</p>

              <h2
                className="
                  text-5xl
                  font-black
                  mt-4
                "
              >
                {sessions?.total || 0}
              </h2>
            </div>

            <div
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                backdrop-blur
              "
            >
              <p className="text-gray-400">Avg Revenue</p>

              <h2
                className="
                  text-5xl
                  font-black
                  mt-4
                "
              >
                $
                {sessions?.total > 0
                  ? Math.round(totalRevenue / sessions.total)
                  : 0}
              </h2>
            </div>
          </div>

          <div
            className="
    bg-white/5
    border
    border-white/10
    rounded-3xl
    overflow-hidden
    backdrop-blur
  "
          >
            <div
              className="
                p-6
                border-b
                border-white/10
              "
            >
              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                Recent Sessions
              </h2>
            </div>

            <table className="w-full">
              <thead
                className="
                  bg-white/5
                  text-gray-400
                "
              >
                <tr>
                  <th className="p-5 text-left">ID</th>

                  <th className="p-5 text-left">Hourly Rate</th>

                  <th className="p-5 text-left">Total Payment</th>

                  <th className="p-5 text-left">Date</th>
                  <th className="p-5 text-left">Status</th>
                  <th className="p-5 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sessions?.data?.map((session: any) => (
                  <tr
                    key={session.id}
                    className="
        border-t
        border-white/10
        hover:bg-white/5
        transition
      "
                  >
                    <td className="p-5">
                      <div
                        className="
            flex
            items-center
            gap-3
          "
                      >
                        <div
                          className="
              w-10
              h-10
              rounded-full
              bg-gradient-to-br
              from-cyan-400
              to-blue-600
              flex
              items-center
              justify-center
              font-bold
            "
                        >
                          {session.id}
                        </div>

                        <div>
                          <p className="font-semibold">Session #{session.id}</p>

                          <p className="text-sm text-gray-400">
                            Payroll Record
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-5">${session.hourlyRate}</td>

                    <td className="p-5">
                      <div
                        className="
            inline-flex
            px-4
            py-2
            rounded-full
            bg-green-500/10
            border
            border-green-400/20
            text-green-400
            font-bold
          "
                      >
                        ${session.totalPayment}
                      </div>
                    </td>

                    <td
                      className="
          p-5
          text-gray-400
        "
                    >
                      {new Date(session.createdAt).toLocaleDateString()}
                    </td>

                    <td className="p-5">
                      <span
                        className="
            px-4
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-400/20
            text-cyan-300
            text-sm
            font-medium
          "
                      >
                        Completed
                      </span>
                    </td>
                    <td className="p-5">
                      <div
                        className="
      flex
      items-center
      gap-3
    "
                      >
                        <EditModal session={session} />

                        <DeleteButton id={session.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <RevenueChart sessions={sessions} />
          </div>
        </div>
      </div>
    </main>
  );
}
