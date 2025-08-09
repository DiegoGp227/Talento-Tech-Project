"use client";

import Header from "@/components/Header/Header";
import TeacherRow from "./components/atoms/TeacherRow";
import NewTeacher from "./components/atoms/NewTeacher";

export default function student_list() {
  const institutionName = localStorage.getItem("email");

  return (
    <>
      <Header gradeTitle="701" headerTitle="Lista de estudiantes" />
      <main className="flex flex-col items-center py-8 bg-gray-100 min-h-screen">
        <div className="flex min-w-[800px] justify-baseline">
          <div className="m-5">
            <h1 className="text-blue-700 text-xl font-bold">{institutionName}</h1>
          </div>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md max-w-[1500px] flex flex-col items-center min-w-[800px]">
          <h1 className="text-4xl text-blue-700">Docentes</h1>
          <TeacherRow TeacherAsignature="Ingles" TeacherName="Juan camilo Pineda" onclick={()=>{}}/>
          <TeacherRow TeacherAsignature="español" TeacherName="Esteban David jimenez quesada" onclick={()=>{}}/>
          <TeacherRow TeacherAsignature="Educacion Fisica" TeacherName="david jerardo oviedo" onclick={()=>{}}/>
          <TeacherRow TeacherAsignature="Sociales" TeacherName="Esteban moreno martinez" onclick={()=>{}}/>
          <TeacherRow TeacherAsignature="Ciencias naturales" TeacherName="Maria elvira perez"/>
          <NewTeacher />
          <button className="flex border border-blue-700 text-blue-700 m-[10px] p-[10px] rounded-[5px] items-center justify-center gap-2 transition duration-300 hover:bg-blue-700 hover:text-gray-300 w-full">
            Enviar
          </button>
        </div>
      </main>
    </>
  );
}
