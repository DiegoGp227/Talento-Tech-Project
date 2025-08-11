"use client";
import { createCourseURL } from "@/api/ulrs/urls";
import { useState } from "react";

interface CreateCourseParams {
  teacher_id: number;
  username: string;
  description: string;
}

export default function useCreateCourse() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const createCourse = async ({ teacher_id, username, description }: CreateCourseParams) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch(createCourseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ teacher_id, username, description }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error creando curso");
      }

      setSuccess(true);
      return data;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createCourse, loading, error, success };
}
