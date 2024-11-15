"use client";

import { LoginForm } from "@/components/Login";
import SetUpProfile from "@/components/profile/SetUpProfile";
import { useSession } from "next-auth/react";

export default function Page() {
  const { status } = useSession();

  return status === "authenticated" ? <SetUpProfile /> : <LoginForm />;
}
