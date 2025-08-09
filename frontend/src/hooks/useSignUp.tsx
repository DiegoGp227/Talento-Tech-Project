// En tu hook
import { useState } from "react";
import { createItem } from "@/api/fetcher/auth"; 
import { signUpURL } from "@/api/ulrs/urls";

interface UserInfo {
  username: string;
  email: string;
  password: string;
}
interface SignupResult {
  message?: string;
  userId?: string ;
  token?: string;
  email?: string;
  username?: string;
}

export function useSignup() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<SignupResult | null>(null);

  const signup = async (userInfo: UserInfo): Promise<SignupResult | null> => {
    setLoading(true);
    setError(null);
    try {
      const result = await createItem(signUpURL, userInfo);
      setData(result);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || "Error desconocido");
      setLoading(false);
      return null;
    }
  };

  return { signup, loading, error, data };
}
