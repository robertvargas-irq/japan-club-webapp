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
        <h1 className="text-center">QR Make & Scan</h1>

        <div className="container text-center">
          <div className="row">
            <div className="col">
              <Link href="/scan">
                <h2>QR Scan &rarr;</h2>
                <p>Use your camera to scan!</p>
              </Link>
            </div>
            <div className="col">
              <Link href="/generate">
                <h2>QR Generator &rarr;</h2>
                <p>Generate a new code!</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
