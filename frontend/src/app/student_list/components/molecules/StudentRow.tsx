import StudentName from "../atoms/StudentName";
import StudentInputs from "./StudentInputs";

interface studentRowProps {
    studentName: string
}

export default function StudentRow({studentName}: studentRowProps ) {
    return (
        <div className="flex border border-blue-700 m-[10px] p-[10px] rounded-[5px] items-center gap-2 justify-between w-full" >
            <StudentName name={studentName} />
            <StudentInputs />
        </div>
    )
}