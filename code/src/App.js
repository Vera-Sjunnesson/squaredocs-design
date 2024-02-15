import Popup from "./components/sections/Popup";
import MainSection from "./components/sections/MainSection";
import Navbar from "./components/sections/Navbar";
import Sidebar from "./components/sections/Sidebar";

const App = () => {
  return (
    <main className="w-screen h-screen bg-background-gradient flex justify-center items-center">
      <div className="w-8/12 h-4/5 bg-primary-white flex flex-col m-auto rounded-4xl shadow-4xl relative lg:w-10/12 sm:mt-5 sm:w-11/12 sm:h-full">
        <Navbar />
        <div className="w-full h-full flex items-center justify-start overflow-auto sm:flex-col-reverse">
          <Sidebar />
          <div className="w-full h-full bg-pink-gradient flex flex-col items-center justify-start rounded-1xl overflow-auto md:overflow-scroll">
            <MainSection />
            <MainSection />
          </div>
        </div>
        <Popup />
      </div>
    </main>
  );
}

export default App;
