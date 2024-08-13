import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Setting from "./pages/Setting";

function App() {
  return (
    <div className="flex gap-2 bg-darkGray w-full h-[100vh] text-white">
      <BrowserRouter>
        <div className="basis-[35%] md:basis-[30%] lg:basis-[20%] p-5 sticky">
          <SideBar />
        </div>
        <div className="bg-[#1f1f21] w-full overflow-auto">
          <Header />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
