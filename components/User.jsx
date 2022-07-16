import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function User({ className }) {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <div
        className={`w-10 h-10 rounded-full hover:bg-gray-200 cursor-pointer overflow-hidden p-1 ${className}`}
      >
        <Image
          onClick={signOut}
          src={session.user.image}
          alt={session.user.name}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
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
