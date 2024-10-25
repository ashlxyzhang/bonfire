"use client";

import { LoginForm } from "@/components/Login";
import SignOut from "@/components/SignOut";
import { useSession } from "next-auth/react";

export default function Page() {
  const { status } = useSession();

  return status === "authenticated" ? <SignOut /> : <LoginForm />;
}
