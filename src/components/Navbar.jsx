import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const [showThemes, setShowThemes] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("Select Theme");
  const location = useLocation();

  // This function checks if the given path is the current location
  const isActive = (path) => location.pathname === path;
  const toggleThemes = () => {
    setShowThemes(!showThemes);
  };

  const selectTheme = (selectedTheme) => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
    setShowThemes(true);
    setSelectedTheme(selectedTheme); // Update the state with selected theme name
  };

  const handleClickOutside = (event) => {
    const toggleButtonElement = document.querySelector(".relative");
    if (!toggleButtonElement.contains(event.target)) {
      setShowThemes(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="h-full">
      <header className="w-full text-white p-4 fixed top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="relative">
            <button
              className="px-3 py-1 mr-4 bg-gray-200 rounded-md"
              onClick={toggleThemes}
              style={{
                color: "var(--button-text)",
                backgroundColor: "var(--button-background)",
                minWidth: "5rem",
              }}
            >
              {selectedTheme}
            </button>

            {showThemes && (
              <div className="absolute z-10 center-0 top-10 bg-white border border-gray-300 rounded-md shadow-lg theme-dropdown-options">
                <button
                  className="block w-full py-2 text-left px-4 original-button-hover"
                  style={{ color: "#067288" }}
                  onClick={() => selectTheme("Light")}
                >
                  Light
                </button>
                <button
                  className="block w-full py-2 text-left px-4 dark-button-hover"
                  style={{ color: "#95b7d0" }}
                  onClick={() => selectTheme("Dark")}
                >
                  Dark
                </button>
              </div>
            )}
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
              <span style={{ color: "var(--nav2)" }}>
                Blockchain Regulation Matrix
              </span>
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
              to="/futureTopics"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav5)" }}>Future Topics</span>
            </NavLink>
            <NavLink
              className={`mr-10 NavLink product ${
                isActive("/Matrix") ? "hidden" : ""
              }`}
              to="/Matrix"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav6)" }}>Matrix</span>
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
        font-size: 1.2em; 
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
