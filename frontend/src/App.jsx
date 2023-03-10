import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Topbar from "./components/Topbar";
import PrivateRoutes from "./hooks/PrivateRoutes";
// pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Writers from "./pages/Writers";
import Contact from "./pages/Contact";
import AuthPage from "./pages/AuthPage";
import LoggedUser from "./pages/LoggedUser";

export default function App() {
  return (
    <div className="flex flex-col text-slate-700 text-sm h-screen w-screen font-sofia">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/writers' exact element={<Writers />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/auth-page' exact element={<AuthPage />} />

          <Route element={<PrivateRoutes />}>
            <Route path='/logged' exact element={<LoggedUser />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
