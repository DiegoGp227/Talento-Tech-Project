"use client";

import { useSignup } from "@/hooks/useSignUp";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  // Estados para controlar inputs
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Usamos tu hook
  const { signup, loading, error, data } = useSignup();

  // Manejar submit del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Objeto con los datos que quieres enviar
    const userInfo = {
      username: institution,
      email,
      password,
    };

    const result = await signup(userInfo);
    if (result) {
      localStorage.setItem("token", result.token ?? "");
      localStorage.setItem("email", result.email ?? "");
      localStorage.setItem("userId", result.userId ?? "");
      localStorage.setItem("rol", "institution" );
      
      router.push("/institution_manager");
    }
  };

  return (
    <main className="flex justify-center items-center w-screen h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center">
        <h1 className="text-blue-700 font-semibold text-3xl">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[300px] space-y-6 mt-5"
        >
          <div>
            <label
              htmlFor="institution"
              className="block text-blue-700 font-semibold mb-2"
            >
              Nombre de la institución
            </label>
            <input
              type="text"
              id="institution"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="El nombre de tu institución"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-blue-700 font-semibold mb-2"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-blue-700 font-semibold mb-2 "
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar sesión"}
          </button>

          {error && (
            <p className="text-red-600 mt-2 text-center font-semibold">
              {error}
            </p>
          )}

          {data && (
            <p className="text-green-600 mt-2 text-center font-semibold">
              Registro exitoso!
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
