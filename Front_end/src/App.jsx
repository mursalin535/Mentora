import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Nav from "./components/Nav/Nav.jsx";
import './App.css';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { session, needsOnboarding } = useAuth();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    if (session && needsOnboarding && pathname !== '/onboarding') {
      navigate('/onboarding')
    }
  }, [session, needsOnboarding, pathname, navigate]);

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;