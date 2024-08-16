import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroCarousel from "../components/HeroCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="p-1">
      <HeroCarousel />
    </main>
  );
}
