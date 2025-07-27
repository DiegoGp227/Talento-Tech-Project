import Navbar from "./Nav/Navbar";

interface headerProps {
    headerTitle: string
    gradeTitle: string
}

export default function Header( {headerTitle,gradeTitle}: headerProps  ) {
  return (
    <header className="w-full h-[40px] bg-blue-500 flex justify-around items-center" >
      <Navbar />
      <p className="font-black">{headerTitle}</p>
      <p className="font-black">{gradeTitle}</p>
    </header>
  );
}
