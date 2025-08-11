import { ReactElement } from "react";

interface graphicDivProps {
  graph: ReactElement;
  titleGraph: string;
}

export default function GraphDiv({ graph, titleGraph }: graphicDivProps) {
  return (
    <div className="w-[220px] h-[220px] flex justify-center flex-col items-center text-center">
      <div>
        <h3 className="text-black">{titleGraph}</h3>
      </div>
      <div className="w-[200px] h-[200px]">{graph}</div>
    </div>
  );
}
