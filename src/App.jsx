import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";
import { FaUserAlt } from "react-icons/fa";

function App() {
  return (
    <div className="bg-slate-950 px-0 mx-0">
      <header>
        <div className="h-[150px] w-full bg-slate-900">
          <div className="mx-auto h-full w-4/5 flex justify-between items-center">
            <div className="text-6xl font-bold">
              <Link to="/" className="text-white">Home</Link>
            </div>
            <div>
              <Link to="user">
                <FaUserAlt className="scale-400 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="user" element={<UserPage />} />
      </Routes>

      <footer className="h-[400px] w-full px-16  bg-slate-900 flex items-center">
        <div className="mx-auto text-6xl">FOOTAH</div>
      </footer>
    </div>
  );
}

export default App;
