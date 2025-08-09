import { ReactElement } from "react";

interface statisticsDivProps {
  childrenOne: ReactElement;
  childrenTwo?: ReactElement;
  title: string;
}

export default function StatisticsDiv({
  childrenOne,
  childrenTwo,
  title,
}: statisticsDivProps) {
  return (
    <>
      <div className="max-w-[700px] h-[300px] bg-white border-3 border-blue-400  m-[25px] rounded-[10px]">
        <div className="w-[100%] h-[50px] flex items-center justify-center">
          <h2 className="text-2xl text-black">{title}</h2>
        </div>
        <div className="w-[100%] h-[250px] flex">
          {childrenOne}
          {childrenTwo && childrenTwo}
        </div>
      </div>
    </>
  );
}
