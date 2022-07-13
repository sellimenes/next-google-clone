import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
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
      {/* Footer */}
    </div>
  );
}
