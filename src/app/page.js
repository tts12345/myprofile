import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Abhi from "./components/abhi";
import DemoComponent from "./components/DemoComponent";
import Education from "./components/education";
import Technology from "./components/technology";

export default function Home() {
  return (
    <>
      {/* <div>
      <Image src= "/images/p1.jpg" height={100} width={200} alt="picture" />
    </div>
   Hello
   <Button>Welcome</Button>
   <Input type="text"/> */}
      <div>

        {/* <About />  */}
        {/* {/* <Abhi /> */}
        <Technology />
        <Projects />
        <Skills />
        {/* <DemoComponent /> */}
        <Education />
        <Contact /> 
      </div>
    </>
  );
}
