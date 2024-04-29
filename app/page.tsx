"use client";

import LogIn from "./login";
import { useAppSelector } from "./redux/store";

export default function Home() {
  const userName = useAppSelector(
    (state: any) => state.authReducer.value.username
  );

  const isModerator = useAppSelector(
    (state: any) => state.authReducer.value.isModerator
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <LogIn />

      <h1>UserName: {userName}</h1>

      {isModerator && <h1> This User is a Moderator</h1>}
    </main>
  );
}
