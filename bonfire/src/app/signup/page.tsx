"use client";

import register from "@/actions/register";
import SignUp from "@/components/SignUp";
import VerifyEmail from "@/components/VerifyEmail";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const [OTP, setOTP] = useState(0);
  const router = useRouter();

  async function handleSignUp() {
    setError("");

    const r = await register({ email, username, password, name });
    if (r?.error) {
      setError(r.error as string);
      return;
    } else {
      setOTP(r?.OTP!);
      setRegistered(true);
    }
  }

  const signUpProps = {
    email: email,
    setEmail: setEmail,
    name: name,
    setName: setName,
    username: username,
    setUsername: setUsername,
    password: password,
    setPassword: setPassword,
    error: error,
    setError: setError,
    handleSignUp: handleSignUp,
  };

  const verifyProps = {
    OTP: OTP,
  };

  return registered ? <VerifyEmail /> : <SignUp {...signUpProps} />;
}
