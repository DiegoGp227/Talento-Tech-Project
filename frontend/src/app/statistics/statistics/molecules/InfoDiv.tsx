import { ComponentType } from "react";

interface InfoDivProps {
  title: string;
  titleGraphOne?: string;
  graphDivOne?: ComponentType;
  titleGraphTwo?: string;
  graphDivTwo?: ComponentType;
}

export default function InfoDiv({
  title,
  graphDivOne: GraphOne,
  graphDivTwo: GraphTwo,
}: InfoDivProps) {
  return (
    <div className="max-w-[700px] h-[300px] bg-white border-3 border-blue-400 m-[25px] rounded-[10px]">
      <div className="w-full h-[50px] flex items-center justify-center">
        <h2 className="text-2xl text-black">{title}</h2>
      </div>

      <div className="flex items-center">
        {GraphOne && <GraphOne />}
        {GraphTwo && <GraphTwo />}
      </div>
    </div>
  );
}

