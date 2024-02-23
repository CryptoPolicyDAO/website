const Footer = () => {
  return (
    <footer className="footer mt-20" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="container flex items-center justify-between px-4 py-8">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Twitter Icon"
            width="50"
            height="50"
            className="mr-4"
          />
          <p style={{ color: "var(--header-color)" }}>Crypto Policy DAO</p>
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
            className="hover:text-purple-500" // Adjust hover color as needed
          >
            <img
              src="/discord.png"
              alt="Discord Icon"
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
