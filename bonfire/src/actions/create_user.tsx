"use server";

import connectDB from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import User from "@/models/User";

interface Props {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

export default async function CreateUser({
  email,
  username,
  password,
  firstname,
  lastname,
}: Props) {
  try {
    await connectDB();

    const hashedPassword = await bcrypt.hash(password, 10);

    const new_user = new User({
      firstname,
      lastname,
      email,
      username,
      password: hashedPassword,
    });

    await new_user.save();
  } catch (error) {
    console.log(error);
  }
}
