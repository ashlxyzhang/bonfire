"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  password: String;
  setPassword: Dispatch<SetStateAction<string>>;
}

export default function PasswordInput({ password, setPassword }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (password !== "") setDisabled(false);
    else setDisabled(true);
  }, [password]);

  return (
    <div className="relative">
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        className="pr-10"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={disabled}
      >
        {showPassword && !disabled ? (
          <EyeIcon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
        )}
      </Button>
    </div>
  );
}

export { PasswordInput };
