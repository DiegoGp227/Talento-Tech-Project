import { useState } from "react";
import { createItem } from "@/api/fetcher/auth"; 
import { createTeacherUrl } from "@/api/ulrs/urls"; 

interface TeacherInfo {
  institution_id: number;
  username: string;
  subject: string;
  email: string;
  password: string;
}

interface CreateTeacherResult {
  message?: string;
  teacherId?: number;
  username?: string;
  email?: string;
}

export function useCreateTeacher() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<CreateTeacherResult | null>(null);

  const createTeacher = async (
    teacherInfo: TeacherInfo
  ): Promise<CreateTeacherResult | null> => {
    setLoading(true);
    setError(null);
    try {
      const result = await createItem(createTeacherUrl, teacherInfo);
      setData(result);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || "Error desconocido");
      setLoading(false);
      return null;
    }
  };

  return { createTeacher, loading, error, data };
}
