import { useState } from "react";
import { createItem } from "@/api/fetcher/auth";
import { loginUrl } from "@/api/ulrs/urls";

interface LoginInfo {
  email: string;
  password: string;
}

interface LoginResult {
  message?: string;
  token?: string;
  userId?: string;
  email?: string;
  type?: string;
}

export function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResult | null>(null);

  const login = async (loginInfo: LoginInfo): Promise<LoginResult | null> => {
    setLoading(true);
    setError(null);
    try {
      const result = await createItem(loginUrl, loginInfo);
      setData(result);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || "Error desconocido");
      setLoading(false);
      return null;
    }
  };

  return { login, loading, error, data };
}
