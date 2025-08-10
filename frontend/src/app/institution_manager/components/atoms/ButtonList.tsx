interface ButtonListProps {
  titleButton: string;
  onClick: () => void;
}

export default function ButtonList({ titleButton, onClick }: ButtonListProps) {
  return (
    <button
      onClick={onClick}
      className="flex border border-blue-700 text-blue-700 m-[10px] p-[10px] rounded-[5px] items-center justify-center gap-2 transition duration-300 hover:bg-blue-700 hover:text-gray-300 w-full"
    >
      {titleButton}
    </button>
  );
}
