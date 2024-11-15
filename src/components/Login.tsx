"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GoogleButton from "./GoogleButton";

import Link from "next/link";
import { PasswordInput } from "./Password";
import { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "./Header";

export function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const router = useRouter();

  async function handleLogin() {
    setError("");

    const r = await signIn("credentials", {
      user: user,
      password: password,
      redirect: false,
    });

    if (r?.error) {
      setError(r.error as string);
    }
    if (r?.ok) {
      router.push("/");
    }
  }

  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center">
      <Header />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="required">
                  Username or A&M Email
                </Label>
                <Input
                  id="email"
                  placeholder="example@tamu.edu"
                  onChange={(e) => setUser(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center">
                  <Label htmlFor="password" className="required">
                    Password
                  </Label>
                  <a
                    className="ml-auto inline-block underline text-sm"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
                <PasswordInput password={password} setPassword={setPassword} />
              </div>
              {error && (
                <p className="text-red-500 text-xs text-center">{error}</p>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="grid w-full gap-4">
          <Button disabled={!user || !password} onClick={handleLogin}>
            Login
          </Button>
          <GoogleButton text={"Login with Google"} />
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
