import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>QR Code</title>
      </Head>

      <main className="container">
        <h1 className="text-center">Culture at our core</h1>
        <h2 id="newsletter"></h2>
      </main>
    </div>
  );
}
