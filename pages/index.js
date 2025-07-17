import Head from 'next/head'
import About from '../components/About'
import Procedures from '../components/Procedures'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhyCali from '../components/WhyCali'
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>LumeCare | Aesthetic & Medical Travel to Cali, Colombia</title>
        <meta
          name="description"
          content="Experience world-class aesthetic and medical treatments in Cali, Colombia. LumeCare supports international clients seeking health, beauty, and rejuvenation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main id="main" aria-label="LumeCare main content">
        <Hero />
        <About />
        <Procedures />
        <WhyCali />
        <ContactForm />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
