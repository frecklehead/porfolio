import Navbar from "./navbar/page";
import Hero from "./hero/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Blog from "./blog/page";
import Achievements from "./achievements/page";
import Volunteering from "./volunteering/page";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <Achievements />
      <Volunteering />
      <About />
      <Contact />
    </div>
  );
}
