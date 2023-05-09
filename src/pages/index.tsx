import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>QR Code</title>
      </Head>

      <main className="container">
        <div className="container my-5">
          <h2 className="text-center">Culture at our core</h2>
          <h1 className="text-center">
            Hi there,{" "}
            <span className="rounded p-1 bg-info bg-gradient position-relative">
              Em
            </span>
          </h1>
        </div>
        <h3 id="newsletter">
          <div className="container border p-4 bg-dark text-light rounded">
            <h1>First Meeting</h1>
            <p>
              Hello everyone! Welcome back to another semester! Enim commodo ut
              laborum culpa sint minim nostrud deserunt qui consectetur nostrud.
              Cupidatat deserunt sit in commodo exercitation irure mollit. Lorem
              Lorem fugiat ad fugiat duis duis non laboris cillum culpa elit
              incididunt. Cillum pariatur cupidatat mollit do. Est laborum
              eiusmod esse ea do adipisicing anim velit culpa duis sit.
            </p>
            <p>
              Magna elit ad magna enim ullamco eiusmod proident ipsum cupidatat
              dolor. Ex qui aliquip pariatur elit minim. Non consequat mollit
              voluptate do nisi adipisicing ullamco sunt Lorem. Deserunt
              exercitation ea sit culpa dolor. Aute minim tempor occaecat ea in
              minim duis minim non anim nostrud do. Do nisi sit irure eiusmod
              amet nulla mollit non culpa eiusmod.
            </p>
            <p>
              Nostrud mollit nostrud cupidatat voluptate. Deserunt cillum non eu
              pariatur quis mollit ex esse. Mollit ullamco ea voluptate occaecat
              dolore. Exercitation ipsum dolore ex id esse do exercitation
              commodo enim proident laboris ipsum. Commodo dolore laborum
              laborum ut occaecat aliquip dolor officia tempor consequat sit. Ad
              est ad ad fugiat laboris esse adipisicing ea incididunt aute
              laboris laboris elit. Do magna aliquip cillum minim sint proident
              reprehenderit qui proident voluptate ea.
            </p>
            <p>
              In reprehenderit ea excepteur dolor Lorem nisi veniam esse veniam
              non mollit adipisicing sit. Nisi laborum consequat id consequat
              cupidatat Lorem deserunt magna. Anim ut ex commodo quis aliqua
              tempor laborum Lorem excepteur irure amet ea. Reprehenderit eu
              enim tempor ipsum amet nulla laborum enim velit minim proident.
            </p>
            <p>
              Exercitation ipsum eiusmod ipsum et ipsum Lorem sint sunt culpa.
              Sit labore pariatur voluptate non irure officia aute. Consequat
              enim amet voluptate duis. Cupidatat in incididunt nisi irure
              laboris. Ex officia fugiat est irure dolor ut officia qui sunt
              duis incididunt voluptate deserunt.
            </p>
            <p>
              Cupidatat non minim pariatur aliqua ut elit pariatur consectetur
              id in aliqua incididunt. Consequat in qui laborum laborum pariatur
              enim id est proident voluptate magna culpa consequat ea. Esse sit
              exercitation ea elit ex cupidatat duis. Deserunt elit tempor
              pariatur amet magna nostrud nisi aliqua elit elit duis. Excepteur
              in occaecat commodo do quis. Proident id id culpa esse.
            </p>
            <p>
              Deserunt est ea incididunt consequat eu ad cillum do aliqua dolore
              quis labore ullamco. Dolore fugiat consequat non esse ut. Amet
              consequat ipsum est consequat duis ea. Amet qui officia cillum
              incididunt adipisicing excepteur mollit do laboris amet ut nisi
              elit. Laborum fugiat deserunt cillum velit ex eiusmod laboris
              tempor.
            </p>
          </div>
        </h3>
      </main>
    </div>
  );
}
