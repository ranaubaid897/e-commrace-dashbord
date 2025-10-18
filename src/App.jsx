import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Deshbord from "./pages/Deshbord/index.jsx";
import Header from "./components/header/index.jsx";
import Sidebar from "./components/sidebar/index.jsx";
import Login from "./pages/login/index.jsx";
import SignUp from "./pages/sign-up/index.jsx";
import Products from "./pages/products/index.jsx";

// ✅ Create Context
const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(true); // sidebar visible by default
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarHeader, setSidebarHeader] = useState("");
  
  // const [change, setchange] = useState("");

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLoggedIn,
    setIsLoggedIn,
    isSidebarHeader,
    setSidebarHeader,

  };

  return (
    <MyContext.Provider value={values}>
      <Router>
        <Header/>
        <div className={`main d-flex `  }>
          {/* ✅ Sidebar render only if isToggleSidebar is true */}

          {isToggleSidebar && (
            <div className={`sidebar-wrap ${isSidebarHeader == "change" ? "changes" : ""}`}>
              <Sidebar />
            </div>
          )}

          {/* ✅ Main content */}
          <div
            className={`content-write flex-grow-1 ${
              isToggleSidebar ? "" : "toggle"
            }`}
          >
            <div className="wrap-right p-3">
              <Routes>
                <Route path="/" element={<Deshbord />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path="/products" element={<Products/>} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
