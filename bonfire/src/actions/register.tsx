"use server";

import connectDB from "@/lib/mongodb";
import { randomInt } from "crypto";
import User from "@/models/User";
import axios from "axios";

interface Props {
  email: string;
}

export default async function register({ email }: Props) {
  try {
    if (!email.includes("@tamu.edu")) {
      return {
        error: "Email must contain @tamu.edu.",
      };
    }

    await connectDB();
    const user = await User.findOne({ email });

    if (user) {
      return {
        error: "Another account is using the same email.",
      };
    }

    const OTP = randomInt(100000, 999999);

    const response = await axios.post(
      `http://localhost:3000/api/email/${OTP}/${email}`
    );

    if (response.status === 200) {
      return {
        OTP: OTP.toString(),
      };
    } else {
      return {
        error:
          "Verification email could not be sent. Please check email address.",
      };
    }
  } catch (error) {
    console.log(error);
  }
}
