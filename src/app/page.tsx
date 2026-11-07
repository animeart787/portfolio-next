import Clouds from "@/components/Clouds";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/MotionRoot";
export default function Page() {
  return (<MotionRoot><Clouds /><Nav /><main><Hero /><About /><Skills /><Projects /><Services /><Process /><Contact /></main><Footer /></MotionRoot>);
}
