import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-20" style={{ backgroundColor: "var(--bac4)" }}>
      <div className="container flex flex-col md:flex-row items-center justify-between px-8 py-2">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="/logo.png" alt="Twitter Icon" width="50" height="50" />
          <p
            className="ml-2 whitespace-nowrap"
            style={{ color: "var(--header-color)" }}
          >
            Crypto Policy DAO
          </p>
        </div>

        <div className="flex items-center mb-4 md:mb-0">
          <NavLink
            to="/contribute"
            className="rounded-md border border-black py-1 md:px-4 md:py-3 hover:bg-gray-200"
            style={{ color: "var(--header-color)", fontSize: "0.8rem" }}
          >
            Contribute and Join
          </NavLink>
        </div>

        <div className="flex items-center">
          <a
            href="https://twitter.com/CryptoPolicyDAO"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:text-blue-500"
          >
            <img
              src="/twitter.webp"
              alt="Twitter Icon"
              width="50"
              height="30"
              className=""
            />
          </a>
          <a
            href="https://github.com/CryptoPolicyDAO"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:text-black"
          >
            <img
              src="/github.png"
              alt="GitHub Icon"
              width="50"
              height="30"
              className=""
            />
          </a>
          <a
            href="https://discord.gg/fX7UaC4A5M"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:text-purple-500"
          >
            <img
              src="/discord.png"
              alt="Discord Icon"
              width="50"
              height="30"
              className=""
            />
          </a>
          <a
            href="https://medium.com/@cryptopolicydao"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500"
          >
            <img
              src="/medium1.png"
              alt="Medium Icon"
              width="50"
              height="30"
              className=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
