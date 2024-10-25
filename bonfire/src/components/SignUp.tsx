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
import Link from "next/link";

import { useState } from "react";
import PasswordInput from "./Password";
import register from "@/actions/register";
import GoogleButton from "./GoogleButton";
import router from "next/router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");

  async function handleSignUp() {
    const r = await register({ email, username, password, name });
    if (r?.error) {
      setError(r.error as string);
      return;
    } else {
      return router.push("/");
    }
  }

  return (
    <div className="flex h-dvh items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="required">
                  A&M Email
                </Label>
                <Input
                  id="email"
                  placeholder="example@tamu.edu"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && (
                  <p className="text-red-500 text-xs text-center">{error}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="required">
                  Full Name
                </Label>
                <Input id="name" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username" className="required">
                  Username
                </Label>
                <Input
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="required">
                  Password
                </Label>
                <PasswordInput password={password} setPassword={setPassword} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="grid w-full gap-4">
          <Button
            className="w-full"
            onClick={handleSignUp}
            disabled={!email || !name || !password || !username}
          >
            Sign Up
          </Button>
          <GoogleButton text="Sign up with Google" />
          <div className="text-center text-sm">
            Have an account?{" "}
            <Link href="/" className="underline">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
