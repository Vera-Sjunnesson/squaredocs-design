import Popup from "./components/lib/Popup";
import MainSection from "./components/sections/MainSection";
import Navbar from "./components/sections/Navbar";
import Sidebar from "./components/sections/Sidebar";

const App = () => {
  return (
    <main className="h-screen w-screen bg-gradient-to-r from-lighter-purple to-darker-purple flex justify-center items-center relative">
      <div className="bg-primary-white flex flex-col m-auto w-8/12 h-4/5 rounded-4xl shadow-4xl">
        <Navbar />
        <div className="flex items-center justify-start h-full overflow-auto md:overflow-scroll">
          <Sidebar />
          <div className="bg-pink-gradient flex flex-col items-center justify-start h-full rounded-1xl overflow-auto md:overflow-scroll">
            <MainSection />
            <MainSection />
          </div>
        </div>
      </div>
      <Popup />
    </main>
  );
}

export default App;
