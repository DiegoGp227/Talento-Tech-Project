"use client";

import Header from "@/components/Header/Header";
import CreateNewCursor from "@/components/Home/molecules/CreateNewCursor";
import CursorDiv from "@/components/Home/molecules/CursorDiv";
import NewCourse from "@/components/Home/organisms/NewCourse";
import { useState } from "react";
import useGetCourse from "@/hooks/useGetCourse"; // 👈 importamos el hook

export default function Home() {
  const [modal, setModal] = useState(false);

  const teacherId =
    typeof window !== "undefined"
      ? Number(localStorage.getItem("userId"))
      : null;

  const { data, loading, error, refetch } = useGetCourse(teacherId ?? 0);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <>
      <Header headerTitle="Español" gradeTitle="701" />
      <main className="flex flex-wrap justify-center">
        <CreateNewCursor onClick={openModal} />

        {loading && <p>Cargando cursos...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {data &&
          Array.isArray(data) &&
          data.map((c) => (
            <CursorDiv key={c.id} titleDiv={c.username} />
          ))}
      </main>

      {modal && (
        <NewCourse
          institutionId={teacherId}
          closeModal={closeModal}
          onCourseAdded={refetch} 
        />
      )}
    </>
  );
}
