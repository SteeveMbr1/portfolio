import Home from "./components/pages/home/Home";
import About from "./components/pages/home/About";
import Works from "./components/pages/home/Works";
import Skills from "./components/pages/home/Skills";
import Contact from "./components/pages/home/Contact";

export default function HomePage() {
    return (
        <>
            <Home></Home>
            <About></About>
            <Works></Works>
            <Skills></Skills>
            <Contact></Contact>
        </>
    );
}
