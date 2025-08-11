import RedirectButton from "../atoms/RedirectButton";
import { FaRegChartBar } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";

interface cursorDivProps {
  titleDiv: string;
}

export default function CursorDiv({ titleDiv }: cursorDivProps) {
  return (
    <div
      className="w-[340px] h-[200px] bg-gray-50 border-3 border-blue-400  m-[25px] rounded-[10px] flex flex-col justify-around transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-lg hover:border-blue-600 hover:bg-blue-50"
    >
      <div className="w-full h-[100px] text-center flex items-center justify-center">
        <h2 className="text-blue-700 text-5xl">{titleDiv}</h2>
      </div>
      <div className="flex justify-evenly">
        <RedirectButton titleButton="Estadisticas" icon={FaRegChartBar} />
        <RedirectButton titleButton="Entrar" icon={IoEnterOutline} />
      </div>
    </div>
  );
}
