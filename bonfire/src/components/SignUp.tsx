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

import { Dispatch, SetStateAction } from "react";
import PasswordInput from "./Password";
import GoogleButton from "./GoogleButton";

interface Props {
  email: String;
  setEmail: Dispatch<SetStateAction<string>>;
  firstname: String;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastname: String;
  setLastName: Dispatch<SetStateAction<string>>;
  username: String;
  setUsername: Dispatch<SetStateAction<string>>;
  password: String;
  setPassword: Dispatch<SetStateAction<string>>;
  error: String;
  setError: Dispatch<SetStateAction<string>>;
  handleSignUp: any;
}

export default function SignUp({
  email,
  setEmail,
  firstname,
  setFirstName,
  lastname,
  setLastName,
  username,
  setUsername,
  password,
  setPassword,
  error,
  handleSignUp,
}: Props) {
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
              <div className="flex gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="required">
                    First Name
                  </Label>
                  <Input
                    id="name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="required">
                    Last Name
                  </Label>
                  <Input
                    id="name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
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
            disabled={
              !email || !firstname || !lastname || !password || !username
            }
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
