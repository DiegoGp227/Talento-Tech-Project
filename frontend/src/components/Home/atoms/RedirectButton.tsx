interface buttonProps {
  titleButton: string;
  icon: React.ElementType; 
}

export default function RedirectButton({ titleButton, icon: Icon }: buttonProps) {
  return (
    <button className="p-1 bg-red-500 color: #6b7280 rounded-[5px] m-1 w-[140px] transition duration-500 hover:bg-red-300 cursor-pointer flex justify-between" >
      {titleButton}
      <Icon size={24} color="white" />
    </button>
  );
}
