import Header from "@/components/Header/Header";
import StudentName from "./components/atoms/StudentName";
import StudentRow from "./components/molecules/StudentRow";

export default function student_list() {
  return (
    <>
      <Header gradeTitle="701" headerTitle="Lista de estudiantes" />
      <main className="flex flex-col items-center py-8 bg-gray-100 min-h-screen">
        <div className="p-4 bg-white rounded-md shadow-md max-w-[1500px] flex flex-col items-center">
        <h1 className="text-4xl text-blue-700">Estudiantes</h1>
          <StudentRow studentName="arnolfo perez gonzales peña" />
          <StudentRow studentName="David santiago gonzales murcia"/>
          <StudentRow studentName="Lucía Ramírez Torres"/>
          <StudentRow studentName="Mateo Fernández Ríos"/>
          <button className="flex border border-blue-700 text-blue-700 m-[10px] p-[10px] rounded-[5px] items-center justify-center gap-2 transition duration-300 hover:bg-blue-700 hover:text-gray-300 w-full">Enviar</button>
        </div>
      </main>
    </>
  );
}
