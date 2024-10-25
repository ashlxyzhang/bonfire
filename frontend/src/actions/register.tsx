"use server";

import connectDB from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import User from "@/models/User";

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
    const new_user = new User({
      name,
      email,
      username,
      password: hashedPassword,
    });

    console.log(new_user);

    await new_user.save();
  } catch (error) {
    console.log(error);
  }
}
