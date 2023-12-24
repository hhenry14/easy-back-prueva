
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SecctionOne from "./components/SecctionOne";

function App() {
  return (
    <div className="h-screen overflow-x-hidden ">
      <div className="bg-gray-50 relative z-[1000]">
        <Navbar />
      </div>
      <div className=" max-w-[1100px] m-auto">
        <Hero />
      </div>
      <div className="bg-gray-200  relative  -top-14 md:-top-32 md:z-10">
        <div className="max-w-[1100px] m-auto">
          <SecctionOne />
        </div>
        <div className="max-w-[1100px] m-auto">
          <Articles />
        </div>
        <div className="max-w-[1100px] m-auto"></div>
      </div>
      <div className="bg-blue-950 relative z-[1000]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
