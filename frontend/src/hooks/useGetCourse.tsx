"use client";
import { getCourseURL } from "@/api/ulrs/urls";
import { useEffect, useState } from "react";

interface Course {
  id: number;
  teacher_id: number;
  username: string;
  description: string;
}

export default function useGetCourse(teacher_id: number) {
  const [data, setData] = useState<Course | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCourse = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(getCourseURL(teacher_id));
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error obteniendo curso");
      }

      setData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (teacher_id) {
      fetchCourse();
    }
  }, [teacher_id]);

  return { data, loading, error, refetch: fetchCourse };
}
