import Image from "next/image";
import Navbar from "./navbar/page";
import Profile from "./profile/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <div>
      <Navbar>

      </Navbar>
   <Profile/>
   <About/>
<Projects/>
<Contact/>

    </div>

  );
}
