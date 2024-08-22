import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import IntroductionCard from "@/components/IntroductionCard";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});
export default function Home() {
  return (
    <main
      id=""
      className={`  ${poppins.className} ${poppins.variable} ${inter.className}`}
    >
      <div className="px-3 sm:px-10 md:px-20 lg:px-24 scroll-1">
        <Navbar />
        <div id="home">
          <IntroductionCard />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
      </div>

      <Footer />
    </main>
  );
}
