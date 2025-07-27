import Header from "@/components/Header/Header";
import StudentName from "./components/atoms/StudentName";
import StudentRow from "./components/molecules/StudentRow";

export default function student_list() {
  return (
    <>
      <Header gradeTitle="701" headerTitle="Lista de estudiantes" />
      <main className="flex flex-col content-center items-center">
        <div className="p-[10px] bg-cyan-500">
          <StudentRow />
          <StudentRow />
          <StudentRow />
          <StudentRow />
        </div>
      </main>
    </>
  );
}
