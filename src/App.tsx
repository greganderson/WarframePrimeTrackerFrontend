import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-center items-center w-screen h-24 p-10 dark:bg-gray-950">
        <h1 className="text-3xl">Warframe Prime Tracker</h1>
      </header>
      <div className="flex flex-col sm:flex-row flex-1">
        <Navbar />
        <main className="grow p-5 bg-gray-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
