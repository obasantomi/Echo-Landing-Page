import "./App.css";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";
import Problem from "./components/Problem";
import Solution from "./components/Solution";

function App() {
  return (
    <>
      <NavBar />
      <div className="mt-60 lg:mt-40 overflow-hidden">
        <Hero />
      </div>
      <Problem />
      <Solution />
      <HowItWorks />

    </>
  );
}

export default App;
