import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import StyleGuide from "@/components/StyleGuide";
import Reservation from "@/components/Reservation";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      {/* <StyleGuide /> */}
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <div className="h-[4000px]"></div>
    </main>
  );
}
