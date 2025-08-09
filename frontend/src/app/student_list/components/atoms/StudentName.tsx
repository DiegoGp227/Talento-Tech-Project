interface studenNameProps {
    name: string
}


export default function StudentName ({name}: studenNameProps) {
    return (
        <p className="text-blue-700">{name}</p>
    )
}