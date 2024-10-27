"use server";

import connectDB from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { randomInt } from "crypto";
import User from "@/models/User";
import axios from "axios";

interface Props {
  email: string;
  username: string;
  password: string;
  name: string;
}

export default async function register({
  email,
  username,
  password,
  name,
}: Props) {
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const OTP = randomInt(100000, 999999);

    const response = await axios.post(
      `http://localhost:3000/api/email/${OTP}/${email}`
    );

    if (response.status === 200) {
      return {
        OTP: OTP,
      };
    } else {
      return {
        error:
          "Verification email could not be sent. Please check email address.",
      };
    }

    const new_user = new User({
      name,
      email,
      username,
      password: hashedPassword,
    });

    // await new_user.save();
  } catch (error) {
    console.log(error);
  }
}
