import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };
  return (
    <div>
      <Head>
        <title>Selim - Google Clone</title>
        <meta name="description" content="Google Clone by SEE." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Body */}
      <form className="flex flex-col items-center mt-40">
        <Image
          objectFit="cover"
          width="450"
          height="150"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />
        <div className="flex w-full mx-auto mt-5 max-w-[90%] border border-gray-200 hover:shadow-lg focus:shadow-lg px-5 py-3 rounded-full cursor-pointer items-center sm:max-w-lg lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            autoFocus
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none cursor-pointer"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-1/2 space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  );
}
