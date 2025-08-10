import { getTeacherUrl } from "@/api/ulrs/urls";
import { useEffect, useState, useCallback } from "react";

interface Teacher {
  id: number;
  institution_id: number;
  username: string;
  subject: string;
  email: string;
}

export function useTeachers(institution_id: number | null) {
  const [data, setData] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTeachers = useCallback(async () => {
    if (!institution_id) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(getTeacherUrl(institution_id));
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Error al obtener docentes");
      }

      setData(json as Teacher[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }, [institution_id]);

  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

  return { data, loading, error, refetch: fetchTeachers };
}
