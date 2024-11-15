"use server";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

interface Props {
  id: string;
}

export default async function GetUser({ id }: Props) {
  await connectDB();
  const user = await User.findById(id);

  return {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    username: user.username,
  };
}
