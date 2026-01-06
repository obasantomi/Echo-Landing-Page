import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="mt-60 lg:mt-40 px-5">
        <Hero />
      </div>
    </>
  );
}

export default App;
