import Header from "@/components/Header/Header";
import CreateNewCursor from "@/components/Home/molecules/CreateNewCursor";
import CursorDiv from "@/components/Home/molecules/CursorDiv";

export default function Home() {
  return (
    <>
      <Header headerTitle="Español" gradeTitle="701" />
      <div className="flex flex-wrap justify-center">
        <CreateNewCursor />
        <CursorDiv titleDiv="501" />
        <CursorDiv titleDiv="502" />
        <CursorDiv titleDiv="601" />
        <CursorDiv titleDiv="602" />
        <CursorDiv titleDiv="701" />
        <CursorDiv titleDiv="702" />
      </div>
    </>
  );
}
