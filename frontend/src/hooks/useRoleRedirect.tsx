"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useRoleRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false); // control de carga

  useEffect(() => {
    if (typeof window === "undefined") return;

    const role = localStorage.getItem("role");

    if (!role) {
      if (pathname !== "/login") router.replace("/login");
    } else if (role === "teacher") {
      if (pathname !== "/") router.replace("/");
    } else if (role === "institution") {
      if (pathname !== "/institution_manager") router.replace("/institution_manager");
    }

    setIsReady(true); // ya verificamos
  }, [pathname, router]);

  return isReady;
}
