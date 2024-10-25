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

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="flex h-dvh items-center justify-center">
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
                <Label htmlFor="email">Username or A&M Email</Label>
                <Input id="email" placeholder="example@tamu.edu" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    className="ml-auto inline-block underline text-sm"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
                <PasswordInput password={password} setPassword={setPassword} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="grid w-full gap-4">
          <Button>Login</Button>
          <GoogleButton />
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
