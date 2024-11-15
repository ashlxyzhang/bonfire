import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Dispatch, SetStateAction } from "react";

interface Props {
  inputOTP: string;
  setInputOTP: Dispatch<SetStateAction<string>>;
  errorOTP: string;
  confirmOTP: string;
}

export default function VerifyEmail({
  inputOTP,
  setInputOTP,
  errorOTP,
  confirmOTP,
}: Props) {
  return (
    <div className="flex flex-col h-dvh justify-center items-center space-y-2">
      <h1>Verify Your Email</h1>
      <InputOTP
        maxLength={6}
        value={inputOTP}
        onChange={(value) => setInputOTP(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {inputOTP === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {inputOTP}</>
        )}
      </div>
      <div className="text-center text-xs">
        {errorOTP !== "" && <div className="text-red-500">{errorOTP}</div>}
      </div>
      <div className="text-center text-xs">
        {confirmOTP !== "" && (
          <div className="text-green-600">{confirmOTP}</div>
        )}
      </div>
    </div>
  );
}
