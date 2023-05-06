import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./page/login/login";
import Cars from "./page/admin/cars";
import NotFoundPage from "./page/pagenotfound/found";
import { AppContext } from "./AppContext/AppContext";
import { useState } from "react";
import SignUp from "./page/login/signup";




export default function App() {

  const [id, setId] = useState(null);

  return (
    <BrowserRouter>
    <AppContext.Provider value={{ id, setId }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="cars" element={<Cars />} />
          <Route path="SignupSide" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);