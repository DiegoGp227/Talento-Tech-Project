import { AiOutlineEdit } from "react-icons/ai";

interface NewTeacherProps {
  onclick?: () => void;
}

export default function NewTeacher({ onclick }: NewTeacherProps) {
  return (
    <button
      onClick={onclick}
      className="flex border border-blue-700 text-blue-700 m-[10px] p-[10px] rounded-[5px] items-center justify-center gap-2 transition duration-300 hover:bg-blue-700 hover:text-gray-300 w-full h-[45px]"
    >
      Añadir Nuevo Docente
    </button>
  );
}
