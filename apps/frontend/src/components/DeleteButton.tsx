"use client";

export default function DeleteButton({ id }: any) {
  async function handleDelete() {
    const confirmDelete = confirm("Delete this session?");

    if (!confirmDelete) return;

    await fetch(`http://localhost:3001/work-session/${id}`, {
      method: "DELETE",
    });

    window.location.reload();
  }

  return (
    <button
      onClick={handleDelete}
      className="
        px-4
        py-2
        rounded-xl
        bg-red-500/10
        border
        border-red-400/20
        text-red-400
        hover:bg-red-500/20
        transition
      "
    >
      Delete
    </button>
  );
}
