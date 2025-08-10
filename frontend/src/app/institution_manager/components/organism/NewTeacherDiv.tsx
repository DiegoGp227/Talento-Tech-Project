import { useCreateTeacher } from "@/hooks/useCreateTeacher";
import { useState } from "react";


interface NewTeacherDivProps {
  closeModal: () => void;
  institutionId: any;
}

export default function NewTeacherDiv({ closeModal, institutionId }: NewTeacherDivProps) {
  const [username, setUsername] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createTeacher, loading, error } = useCreateTeacher();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos si quieres
    if (!username || !email || !password || !subject) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const result = await createTeacher({
      institution_id: institutionId,
      username,
      subject,
      email,
      password,
    });

    if (result) {
      alert("Docente creado correctamente");
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-20 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded p-6 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
          onClick={closeModal}
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label
            htmlFor="username"
            className="block text-blue-700 font-semibold mb-2"
          >
            Nombre de Docente
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />

          <label
            htmlFor="subject"
            className="block text-blue-700 font-semibold mb-2 mt-4"
          >
            Materia
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />

          <label
            htmlFor="email"
            className="block text-blue-700 font-semibold mb-2 mt-4"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />

          <label
            htmlFor="password"
            className="block text-blue-700 font-semibold mb-2 mt-4"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Creando..." : "Crear Docente"}
          </button>

          {error && (
            <p className="mt-4 text-red-600 font-semibold">
              Error: {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
