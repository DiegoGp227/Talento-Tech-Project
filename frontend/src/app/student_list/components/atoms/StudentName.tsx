interface studenNameProps {
    name: string
}


export default function StudentName ({name}: studenNameProps) {
    return (
        <p>{name}</p>
    )
}