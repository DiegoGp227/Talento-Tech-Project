import { CgAddR } from "react-icons/cg";

interface CreateNewCursor {
  onClick: () => void;
}

export default function CreateNewCursor({ onClick }: CreateNewCursor) {
  return (
    <div
      onClick={onClick}
      className="w-[340px] h-[200px] bg-gray-50 border-3 border-blue-400 rounded-[10px] m-[25px] 
      text-center flex items-center justify-center cursor-pointer 
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-lg hover:border-blue-600 hover:bg-blue-50"
    >
      <CgAddR className="w-[100px] h-[100px] text-blue-700" />
    </div>
  );
}
