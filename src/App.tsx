import "./App.css";
import Credibility from "./components/Credibility";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import ForLeaders from "./components/ForLeaders";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import WaitList from "./components/WaitList";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <ForLeaders />
      <WhyUs />
      <Credibility />
      <WaitList />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
