"use client";

import CreateUser from "@/actions/create_user";
import register from "@/actions/register";
import SignUp from "@/components/SignUp";
import VerifyEmail from "@/components/VerifyEmail";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);

  const [OTP, setOTP] = useState("");
  const [inputOTP, setInputOTP] = useState("");
  const [errorOTP, setErrorOTP] = useState("");
  const [confirmOTP, setConfirmOTP] = useState("");

  const router = useRouter();

  async function handleSignUp() {
    setError("");

    const r = await register({ email });
    if (r?.error) {
      setError(r.error as string);
      return;
    } else {
      setOTP(r?.OTP!);
      setRegistered(true);
    }
  }

  useEffect(() => {
    if (inputOTP.length === 6) {
      if (inputOTP === OTP) {
        CreateUser({ email, username, password, name });
        setConfirmOTP(
          "Account created successfully. Redirecting to login page..."
        );
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setErrorOTP("Wrong one-time password.");
      }
    } else {
      setConfirmOTP("");
      setErrorOTP("");
    }
  }, [inputOTP]);

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
    inputOTP: inputOTP,
    setInputOTP: setInputOTP,
    errorOTP: errorOTP,
    confirmOTP: confirmOTP,
  };

  return registered ? (
    <VerifyEmail {...verifyProps} />
  ) : (
    <SignUp {...signUpProps} />
  );
}
