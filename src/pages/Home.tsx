import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Policies from "@/components/Policies";
import Contact from "@/components/Contact";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Home = () => {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Policies />
      <Contact />
    </>
  );
};

export default Home;
