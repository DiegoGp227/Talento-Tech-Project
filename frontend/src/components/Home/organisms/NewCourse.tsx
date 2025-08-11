import useCreateCourse from "@/hooks/useCreatedCurse";
import { useState } from "react";

interface NewCourseProps {
  institutionId: any;
  closeModal: () => void;
  onCourseAdded: () => void;
}

export default function NewCourse({
  institutionId,
  closeModal,
  onCourseAdded,
}: NewCourseProps) {
  const [course, setCourse] = useState("");

  const { createCourse, loading, error } = useCreateCourse();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!course) {
      alert("Por favor, ingresa el número del curso");
      return;
    }

    const result = await createCourse({
      teacher_id: institutionId,
      username: course,
      description: "Descripción opcional",
    });

    if (result) {
      if (onCourseAdded) onCourseAdded();
      onCourseAdded();
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-opacity-20 flex justify-center items-center"
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
            htmlFor="course"
            className="block text-blue-700 font-semibold mb-2"
          >
            Número de Curso
          </label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Creando..." : "Crear Curso"}
          </button>

          {error && (
            <p className="mt-4 text-red-600 font-semibold">Error: {error}</p>
          )}
        </form>
      </div>
    </div>
  );
}
