"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/useLogin";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await login({ email, password });

    if (result) {
      // Guardar info en estado global
      localStorage.setItem("token", result.token ?? "");
      localStorage.setItem("email", result.email ?? "");
      localStorage.setItem("userId", result.userId ?? "");
      localStorage.setItem("rol", result.type ?? "");

      // Redirigir según tipo
      if (result.type === "teacher") {
        router.push("/");
      } else {
        router.push("/institution_manager");
      }
    }
  };

  return (
    <main className="flex justify-center items-center w-screen h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center">
        <h1 className="text-blue-700 font-semibold text-3xl">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[300px] space-y-6 mt-5"
        >
          <label
            htmlFor="email"
            className="block text-blue-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Correo"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <label
            htmlFor="password"
            className="block text-blue-700 font-semibold mb-2 "
          >
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Contraseña"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors"
          >
            {loading ? "Cargando..." : "Iniciar sesión"}
          </button>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
      </div>
    </main>
  );
}
