import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menus from "@/components/Menus";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Ambiance from "@/components/Ambiance";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HEADER */}
      <Navbar />
      {/* HERO SECTION */}
      <Hero />
      {/* FEATURED COFFEES SECTION */}
      <Menus />
      {/* SERVICES SECTION */}
      <Services />
      {/* AMBIANCE */}
      <Ambiance />

      {/* ABOUT US */}
      <AboutUs />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
