import { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const [showThemes, setShowThemes] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "Light"
  );
  const location = useLocation();
  const toggleRef = useRef(null); // Reference to the toggle button

  // This function checks if the given path is the current location
  const isActive = (path) => location.pathname === path;

  const toggleThemes = () => {
    const newTheme = selectedTheme === "Light" ? "Dark" : "Light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setSelectedTheme(newTheme); // Update the state with selected theme name
  };

  useEffect(() => {
    // Set the selected theme based on the initial theme of the app
    setSelectedTheme(
      document.documentElement.getAttribute("data-theme") || "Light"
    );
  }, []);

  return (
    <div className="h-full">
      <header className="w-full text-white p-4 fixed top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="relative selectbutton">
            <button
              ref={toggleRef}
              className="mr-4 rounded-md"
              onClick={toggleThemes}
              style={{
                color: "var(--button-text)",
                backgroundColor: "var(--button-background)",
                minWidth: "5rem",
              }}
            >
              {selectedTheme === "Light" ? "Dark" : "Light"}
            </button>
          </div>
          <div>
            <NavLink
              className={`mr-10 NavLink product ${
                isActive("/") ? "hidden" : ""
              }`}
              to="/"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav1)" }}>Home</span>
            </NavLink>
            <NavLink
              className={`mr-10 NavLink product ${
                isActive("/BlockchainMatrix") ? "hidden" : ""
              }`}
              to="/BlockchainMatrix"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav2)" }}>Regulation Matrix</span>
            </NavLink>
            <NavLink
              className={`mr-10 NavLink product ${
                isActive("/friction") ? "hidden" : ""
              }`}
              to="/friction"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav3)" }}>
                Bureaucratic Friction
              </span>
            </NavLink>
            <NavLink
              className={`mr-10 NavLink product ${
                isActive("/contribute") ? "hidden" : ""
              }`}
              to="/contribute"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav4)" }}>Join</span>
            </NavLink>
            <NavLink
              className={`mr-10 NavLink product ${
                isActive("/futureTopics") ? "hidden" : ""
              }`}
              to="/Blog"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav5)" }}>Blog</span>
            </NavLink>
            <NavLink
              className={`mr-10 NavLink product ${
                isActive("/Treasury") ? "hidden" : ""
              }`}
              to="/Treasury"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav6)" }}>Treasury</span>
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <style>
        {`
        
        .product {
          position: relative;
        }
        
        .header {
          position: sticky;
          top: 0;
          z-index: 10;
        }
        
    .NavLink {
        font-size: 0.8em; 
      }

        .product:hover .effect-1,
        .product:hover .effect-2 {
          display: block;
        }
        
        .effect-1 {
          border-radius: 30%;
          display: none;
          mix-blend-mode: multiply;
          height: 84%;
          opacity: 1;
          position: absolute;
          width: 84%;
          z-index: 3000;
        }

        .effect-2 {
          border-radius: 30%;
          display: none;
          mix-blend-mode: multiply;
          height: 84%;
          opacity: 1;
          position: absolute;
          width: 84%;
          z-index: 3000;
        }
        
        .effect-1 {
          animation: rotate 1.8s linear infinite;
          background: var(--effect-1);
        }
        
        .effect-2 {
          animation: rotate 1.2s linear reverse infinite;
          background: var(--effect-2);
        }
        
        @keyframes rotate {
          0% {
            top: 0;
            left: 8%;
          }
          25% {
            top: 8%;
            left: 0%;
          }
          50% {
            top: 16%;
            left: 8%;
          }
          75% {
            top: 38%;
            left: 16%;
          }
          100% {
            top: 0;
            left: 8%;
          }
        }

        .selectbutton {
          font-size: 0.8em; 
        }
        
        .original-button-hover:hover {
            background-color: #f0f5f9;
          }
          .dark-button-hover:hover {
            background-color: #6987a0;
          }
 
        `}
      </style>
    </div>
  );
}
