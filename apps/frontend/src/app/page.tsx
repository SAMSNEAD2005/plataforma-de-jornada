async function getSessions() {
  const response = await fetch("http://localhost:3001/work-session");

  return response.json();
}

export default async function Home() {
  const sessions = await getSessions();

  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Work Sessions</h1>

      <div className="space-y-4">
        {sessions.data.map((session: any) => (
          <div
            key={session.id}
            className="
              bg-white
              rounded-xl
              p-4
              shadow
            "
          >
            <p>
              <strong>ID:</strong> {session.id}
            </p>

            <p>
              <strong>Hourly Rate:</strong> ${session.hourlyRate}
            </p>

            <p>
              <strong>Total Payment:</strong> ${session.totalPayment}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
