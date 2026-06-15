import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Testimonials from "./components/Testimonials"

export function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      <footer className="py-6 bg-stone-50 border-t border-stone-200/40 text-center">
        <p className="text-[11px] tracking-wider uppercase text-stone-400 font-medium">
          &copy; {new Date().getFullYear()} Gallant. All rights reserved. Built with React & TypeScript.
        </p>
      </footer>
    </div>
  )
}

export default App
