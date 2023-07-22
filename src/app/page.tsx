import AboutMeSection from "@/components/aboutMeSection/aboutMeSection";
import ContactSection from "@/components/contactSection/contactSection";
import Introduction from "@/components/introduceSection/introduce";
import Navbar from "@/components/shared/Navbar";
import TransitionSection from "@/components/transitionSection/transitionSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Uğurcan KUZU | Web Developer",
  description:
    "Uğurcan KUZ - I'm a web developer and you can find more information about me on this website.",
};
export default function Home() {
  return (
    <main className="w-screen bg-background">
      <Navbar />
      <Introduction />
      <TransitionSection />
      <AboutMeSection />
      <ContactSection />
    </main>
  );
}
