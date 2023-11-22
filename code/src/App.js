import MainSection from "./components/sections/MainSection";
import Navbar from "./components/sections/Navbar";
import Sidebar from "./components/sections/Sidebar";

const App = () => {
  return (
    <main className="h-screen w-screen bg-gradient-to-r from-lighter-purple to-darker-purple flex justify-center items-center">
      <div className="bg-primary-white flex flex-col m-auto w-8/12 h-4/5 rounded-4xl shadow-4xl">
        <Navbar />
        <div className="flex items-center justify-start grow">
          <Sidebar />
          <MainSection />
        </div>
      </div>
    </main>
  );
}

export default App;
