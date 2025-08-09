import { AiOutlineEdit } from "react-icons/ai";

interface TeacherRowProps {
  TeacherName: string;
  TeacherAsignature: string;
  onclick?: () => void;
}

export default function TeacherRow({
  TeacherName,
  TeacherAsignature,
  onclick,
}: TeacherRowProps) {
  return (
    <div className="flex border border-blue-700 m-[10px] p-[10px] rounded-[5px] items-center gap-2 justify-between w-full">
      <div className="w-[400px]">
        <p className="text-blue-700">{TeacherName}</p>
      </div>
      <div>
        <p className="text-blue-400">{TeacherAsignature}</p>
      </div>
      <div></div>
      <button className="cursor-pointer">
        <AiOutlineEdit className="text-blue-700 w-6 h-6" />
      </button>
    </div>
  );
}
