import NewTeacherButton from "../atoms/NewTeacherButton";
import TeacherRow from "../atoms/TeacherRow";

interface TeacherListProps {
  openModal: () => void;
}

export default function TeacherList({ openModal }: TeacherListProps) {
  return (
    <div className="p-4 bg-white rounded-md shadow-md max-w-[1500px] flex flex-col items-center min-w-[800px]">
      <h1 className="text-4xl text-blue-700">Docentes</h1>
      <TeacherRow
        TeacherAsignature="Ingles"
        TeacherName="Juan camilo Pineda"
        onclick={() => {}}
      />
      <TeacherRow
        TeacherAsignature="español"
        TeacherName="Esteban David jimenez quesada"
        onclick={() => {}}
      />
      <TeacherRow
        TeacherAsignature="Educacion Fisica"
        TeacherName="david jerardo oviedo"
        onclick={() => {}}
      />
      <TeacherRow
        TeacherAsignature="Sociales"
        TeacherName="Esteban moreno martinez"
        onclick={() => {}}
      />
      <TeacherRow
        TeacherAsignature="Ciencias naturales"
        TeacherName="Maria elvira perez"
      />
      <NewTeacherButton onClick={openModal} />
      <button
        className="flex border border-blue-700 text-blue-700 m-[10px] p-[10px] rounded-[5px] items-center justify-center gap-2 transition duration-300 hover:bg-blue-700 hover:text-gray-300 w-full"
        // <-- Abre el modal al hacer clic
      >
        Enviar
      </button>
    </div>
  );
}
