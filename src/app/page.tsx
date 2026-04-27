import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Roles from "@/components/Roles";
import Blog from "@/components/Blog";
import TikTok from "@/components/TikTok";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Roles />
        <Blog />
        <TikTok />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
