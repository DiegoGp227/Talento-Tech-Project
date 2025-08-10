import ButtonList from "../atoms/ButtonList";
import TeacherRow from "../atoms/TeacherRow";

interface dataTeacherList {
  id: number;
  institution_id: number;
  username: string;
  subject: string;
  email: string;
}

interface TeacherListProps {
  data: dataTeacherList[];
  openModal: () => void;
}

export default function TeacherList({ openModal, data }: TeacherListProps) {
  return (
    <div className="p-4 bg-white rounded-md shadow-md max-w-[1500px] flex flex-col items-center min-w-[800px]">
      <h1 className="text-4xl text-blue-700">Docentes</h1>
      {data.map((data) => (
        <TeacherRow
          key={data.id}
          TeacherAsignature={data.subject}
          TeacherName={data.username}
          onClick={() => {
            console.log("Click en", data.username);
          }}
        />
      ))}
      <ButtonList onClick={openModal} titleButton={"Añadir Nuevo Docente"} />
    </div>
  );
}
