import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Problem from "./components/Problem";

function App() {
  return (
    <>
      <NavBar />
      <div className="mt-60 lg:mt-40 px-5 overflow-hidden">
        <Hero />
      </div>
        <Problem />
    </>
  );
}

export default App;
