import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import QuickSummary from './components/QuickSummary';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <CustomCursor />
        <ThemeToggle />
        <Hero />
        <QuickSummary />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
