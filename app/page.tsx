import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import Welcome from "@/components/Welcome";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Welcome />
      <Grid />
      <Projects />
      <Posts />
      <Footer /> 
    </div>
   </main>
  );
}
