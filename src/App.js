import {useState, useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {


  const [isLoggedIn, setIsloggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsloggedIn(true);
  }

  const logout = () => {
    setIsloggedIn(false);
  }

  

  useEffect(() => {
    if (isLoggedIn) {
      
      navigate("/");
    } else {
      
      navigate("/login")
    }
  }, [isLoggedIn, navigate]);


  return (
    <div className="app">
      <NavBar logout={logout}/>
      <Outlet context={login} />
    </div>
  );
}

export default App;