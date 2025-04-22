import Hero from "@/components/Hero";
import HeroNav from "@/components/HeroNav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroNav />
      <Hero />
    </div>
  );
}
