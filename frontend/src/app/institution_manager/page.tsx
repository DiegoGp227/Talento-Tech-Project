"use client";

import Header from "@/components/Header/Header";
import { useState } from "react";
import NewTeacherDiv from "./components/organism/NewTeacherDiv";
import TeacherList from "./components/organism/TeacherList";
import { useTeachers } from "@/hooks/useGetTeachers";

export default function StudentList() {
  const [modal, setModal] = useState(false);

  const institutionName =
    typeof window !== "undefined" ? localStorage.getItem("email") : "";

  const institutionId =
    typeof window !== "undefined"
      ? Number(localStorage.getItem("userId"))
      : null;

  const { data, loading, error, refetch } = useTeachers(institutionId);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <>
      <Header gradeTitle="701" headerTitle="Lista de estudiantes" />
      <main className="flex flex-col items-center py-8 bg-gray-100 min-h-screen">
        <div className="flex min-w-[800px] justify-baseline">
          <h1 className="text-blue-700 text-xl font-bold m-5">
            {institutionName}
          </h1>
        </div>

        {loading && <p>Cargando docentes...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <TeacherList openModal={openModal} data={data} />
        )}

        {/* Modal */}
        {modal && (
          <NewTeacherDiv
            institutionId={institutionId}
            closeModal={closeModal}
            onTeacherAdded={refetch}
          />
        )}
      </main>
    </>
  );
}
