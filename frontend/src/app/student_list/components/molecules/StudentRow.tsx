import StudentName from "../atoms/StudentName";
import StudentInputs from "./StudentInputs";

export default function StudentRow() {
    return (
        <div className="flex bg-blue-200 m-[10px] p-[10px] rounded-[5px]" >
            <StudentName name="arnolfo perez gonzales" />
            <StudentInputs />
        </div>
    )
}