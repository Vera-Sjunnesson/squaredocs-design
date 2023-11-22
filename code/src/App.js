import MainSection from "./components/sections/MainSection";
import Navbar from "./components/sections/Navbar";
import Sidebar from "./components/sections/Sidebar";

const App = () => {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="flex bg-white m-auto w-10/12 h-4/5 rounded-4xl shadow-3xl relative">
        <Navbar />
        <Sidebar />
        <MainSection />
      </div>
    </main>
  );
}

export default App;
