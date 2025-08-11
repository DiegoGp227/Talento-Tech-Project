import Header from "@/components/Header/Header";
import PieGraphics from "@/graphics/pie";
import InfoDiv from "./statistics/molecules/InfoDiv";
import GraphDiv from "./statistics/molecules/GraphDiv";

export default function statistics() {
  return (
    <>
      <Header headerTitle="Estadisticas" gradeTitle="701" />
      <main className="flex justify-center flex-wrap">
        <InfoDiv
          title="Notas de los Estudiantes"
          graphDivOne={() => (
            <GraphDiv
              titleGraph="Estado Promedio De los estudiantes"
              graph={<PieGraphics />}
            />
          )}
          graphDivTwo={() => (
            <GraphDiv titleGraph="Asistencia" graph={<PieGraphics />} />
          )}
        />
        <InfoDiv
          title="Asistencia de los Estudiantes"
          graphDivOne={() => (
            <GraphDiv titleGraph="Promedios" graph={<PieGraphics />} />
          )}
          graphDivTwo={() => (
            <GraphDiv titleGraph="Asistencia" graph={<PieGraphics />} />
          )}
        />
        <InfoDiv
          title="Estado frente a otros cursos"
          graphDivOne={() => (
            <GraphDiv titleGraph="Promedio Academico" graph={<PieGraphics />} />
          )}
          graphDivTwo={() => (
            <GraphDiv titleGraph="Asistencias" graph={<PieGraphics />} />
          )}
        />
      </main>
    </>
  );
}
