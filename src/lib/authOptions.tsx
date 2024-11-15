import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    Credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        user: { label: "User", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const found_user = await User.findOne({
          $or: [{ email: credentials?.user }, { username: credentials?.user }],
        }).select("+password");

        if (!found_user) {
          throw new Error("Email or username not associated with an account.");
        }
        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          found_user.password
        );

        if (!passwordMatch)
          throw new Error("Wrong password. Try again or reset your password.");

        return found_user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
  },
};
