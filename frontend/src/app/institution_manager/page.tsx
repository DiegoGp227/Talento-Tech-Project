"use client";

import Header from "@/components/Header/Header";
import TeacherRow from "./components/atoms/TeacherRow";
import NewTeacher from "./components/atoms/NewTeacherButton";
import { useState } from "react";
import NewTeacherDiv from "./components/organism/NewTeacherDiv";
import TeacherList from "./components/organism/TeacherList";

export default function StudentList() {
  const [modal, setModal] = useState(false);
  const institutionName =
    typeof window !== "undefined" ? localStorage.getItem("email") : "";

  const institutionId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : "";

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
        <TeacherList openModal={openModal} />

        {/* Modal */}
        {modal && (
          <>
            <NewTeacherDiv institutionId={institutionId} closeModal={closeModal} />
          </>
        )}
      </main>
    </>
  );
}
