import Navbar from "./components/sections/Navbar";

const App = () => {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="flex bg-white m-auto w-10/12 h-4/5 p-10 rounded-4xl shadow-3xl relative">
        <Navbar />
      </div>
    </main>
  );
}

export default App;
