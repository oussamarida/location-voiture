import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/login/login";
import SignUp from "./pages/login/signup";

import NotFoundPage from "./pages/pagenotfound/found";




export default function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="search/:VilleZ/:datedebut/:datefin" element={<Search />} />
        <Route path="login/:id/:datedebut/:datefin" element={<Login />} />
        <Route path="SignupSide/:id/:datedebut/:datefin" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);