import videoFile from "/3DLogo.mp4";
import { useState } from "react";

export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);
  const inlineStyles = `
    video {
      transition: transform 0.5s ease-in-out; /* Smooth transition */
      border-radius: 20px;
    }
    video:hover {
      transform: scale(1.2); /* Zoomed scale - 1.2 times */
    }

    @media (max-width: 767px) {
      .video-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

  `;
  return (
    <div className="container pt-20">
      {/* Mobile layout (max-width: 768px) */}
      <div className="md:hidden">
        <div className="container mx-auto pt-20 pb-20 justify-center items-center">
          <p
            className="header pb-10 "
            style={{ color: "var(--header-color)", fontSize: "2rem" }}
          >
            Crypto Policy DAO
          </p>
          <div className="video-center video-container">
            <video autoPlay loop muted width="300" height="400">
              <source src={videoFile} type="video/mp4" />
            </video>
          </div>
          <div className="text-center">
            <br />
            <p
              className="sub-header text-center "
              style={{ color: "var(--header-color)", fontSize: "1.5rem" }}
            >
              Web3-friendly Regulatory Think Tank
            </p>

            <br />
            <div className="text-center pl-2 pr-2">
              <p className="content1">
                Our mission is to be a platform for policymakers and blockchain
                builders to collaborate on the technical and regulatory research
                of blockchain technologies that promote a web3-friendly
                regulatory environment. The speed of blockchain innovation is
                outpacing the regulatory environment and leaving legislators
                behind in understanding and creating web3-friendly regulation.
              </p>
              <br />
              <p className="content2">
                The underlying technology propelling the blockchain will
                continuously advance regardless of any political regulation, and
                for us to capture the benefits of emerging and innovative
                blockchain technology, we need to understand how and where
                regulation of the blockchain connect.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout (min-width: 768px) */}
      <div className="pt-10 hidden md:flex">
        <div className="w-1/2 text-center pl-20 pt-5">
          <video
            autoPlay
            loop
            muted
            width="490"
            height="580"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            className={isZoomed ? "zoomed" : ""}
          >
            <source src={videoFile} type="video/mp4" />
          </video>
        </div>
        <div className="w-1/2 text-left max-w-600">
          <p
            className="text-left text-2xl"
            style={{ color: "var(--header-color)", fontSize: "2rem" }}
          >
            Crypto Policy DAO
          </p>
          <br />
          <p
            className="text-left text-xl"
            style={{ color: "var(--header-color)", fontSize: "1.5rem" }}
          >
            Web3-friendly Regulatory Think Tank
          </p>
          <br />
          <div className="text-left">
            <p style={{ color: "var(--description-color)", maxWidth: "550px" }}>
              Our mission is to be a platform for policymakers and blockchain
              builders to collaborate on the technical and regulatory research
              of blockchain technologies that promote a web3-friendly regulatory
              environment. The speed of blockchain innovation is outpacing the
              regulatory environment and leaving legislators behind in
              understanding and creating web3-friendly regulation.
            </p>
            <br />
            <p style={{ color: "var(--content-color)", maxWidth: "550px" }}>
              The underlying technology propelling the blockchain will
              continuously advance regardless of any political regulation, and
              for us to capture the benefits of emerging and innovative
              blockchain technology, we need to understand how and where
              regulation of the blockchain connect.
            </p>
          </div>
        </div>
      </div>
      <style>{inlineStyles}</style>
    </div>
  );
}
