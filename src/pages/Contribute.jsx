import { useState } from "react";
import videoFile from "/MemberNFT.mp4";

export default function Contribute() {
  const [isZoomed, setIsZoomed] = useState(false);
  const inlineStyles = `
    p {
      font-family: 'Poppins', sans-serif;
      font-weight: 200;
      font-size: 16px;
      line-height: 1.7;
      color: var(--effect-2);
      margin: 0;
    }
    .video-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 50px;
      overflow: hidden; /* Hide overflowing content */
    }
    .zoom-video {
      width: 1000px; /* Initial width */
      height: 700px; /* Initial height */
      transition: transform 0.5s ease-in-out; /* Smooth transition */
    }
    .zoom-video:hover {
      transform: scale(1.2); /* Zoomed scale - 1.2 times */
    }
  `;

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <h1
        className="mb-5 mt-20 text-center"
        style={{ color: "var(--header-color)", fontSize: "2rem" }}
      >
        Contribute and Join
      </h1>
      <p
        className="mb-10 mt-10 text-center"
        style={{ color: "var(--description-color)", fontSize: "1.5rem" }}
      >
        Join Crypto Policy DAO to enhance regulatory clarity and to promote
        blockchain innovation
      </p>
      <div>
        <p
          className="mb-10 text-center mx-auto"
          style={{
            color: "var(--content-color)",
            maxWidth: "900px",
            fontSize: "1rem",
          }}
        >
          Interested in contributing to regulatory innovation in the blockchain
          space? Join Crypto Policy DAO, where policymakers and blockchain
          enthusiasts collaborate on regulatory and technical research in the
          web3 landscape.
        </p>
        <p
          className="mb-10 text-center mx-auto"
          style={{
            color: "var(--content-color)",
            maxWidth: "900px",
            fontSize: "1rem",
          }}
        >
          To become a part of our community, clone our GitHub repository and
          propose your changes. Submit your alterations via pull requests for
          our evaluation. Once accepted, you will receive the NFT below and gain
          access to our members-only chatroom for further collaboration.
        </p>
        <p
          className="text-center mx-auto"
          style={{
            color: "var(--content-color)",
            maxWidth: "900px",
            fontSize: "1rem",
          }}
        >
          As the DAO earns revenue for its crypto lobbying efforts, all members
          will split the DAO&apos;s treasury every quarter, and you can view the
          current revenue under the Treasury tab.
        </p>
      </div>
      <div
        className="video-container"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <video
            autoPlay
            loop
            muted
            className={`zoom-video ${isZoomed ? "zoomed" : ""}`}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <source src={videoFile} type="video/mp4" />
          </video>
        </div>
      </div>
      <style>{inlineStyles}</style>
    </div>
  );
}
