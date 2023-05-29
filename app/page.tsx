import Head from "next/head";
// import Navbar from "../components/Navbar";
import Body from "../components/Body";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Manoj Kumar</title>
      </Head>

      {/* <Navbar /> */}

      {/* <Image
        src="/../public/assets/mk_logo.png"
        alt="logo"
        width="70"
        height="70"
      /> */}

      <Body />
      <Skills />
      <About />

      <Projects />
      <Contact />
    </div>
  );
}
