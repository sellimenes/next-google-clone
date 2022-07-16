import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function User({ className }) {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={session.user.image}
          alt={session.user.name}
          className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}
        />
      </>
    );
  }
  return (
    <div className={`${className}`}>
      <button
        onClick={() => router.push("/auth/signin")}
        className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md`}
      >
        Sign In
      </button>
    </div>
  );
}
