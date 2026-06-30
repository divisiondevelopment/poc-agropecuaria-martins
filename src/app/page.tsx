import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Categories } from "@/components/sections/categories";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex flex-col">
        <Hero />
        <About />
        <Categories />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
