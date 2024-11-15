import { useSession } from "next-auth/react";
import GetUser from "@/actions/get_user";

import { useEffect, useState } from "react";

import Header from "../Header";
import ProfileForm from "./ProfileForm";
import { Photos } from "./Photos";

export default function SetUpProfile() {
  const { data: session } = useSession();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
  });

  useEffect(() => {
    async function fetchUser() {
      if (session) {
        const response = await GetUser({ id: session.user?.id! });
        setUser(response);
      }
    }

    fetchUser();
  }, [session]);

  return (
    <div className="flex flex-col w-full h-dvh gap-4 items-center mt-16">
      <Header />
      <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">
        Set up your profile 🩵
      </h3>
      <div className="flex gap-8 items-start">
        <ProfileForm user={user} />
        <Photos />
      </div>
    </div>
  );
}
