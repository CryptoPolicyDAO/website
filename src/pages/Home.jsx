import videoFile from "/3DLogo.mp4";
import { useState } from "react";

export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);

  const inlineStyles = `
    video {
      transition: transform 0.5s ease-in-out; /* Smooth transition */
    }
    video:hover {
      transform: scale(1.2); /* Zoomed scale - 1.2 times */
    }
  `;

  return (
    <div className="pt-20 flex items-center">
      <div className="w-1/2 text-center pl-20">
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
      <div className="w-1/2 text-left" style={{ maxWidth: "600px" }}>
        <p
          className="text-left"
          style={{ color: "var(--header-color)", fontSize: "2rem" }}
        >
          Crypto Policy DAO
        </p>
        <br></br>
        <p
          className="text-left"
          style={{ color: "var(--header-color)", fontSize: "1.5rem" }}
        >
          Web3-friendly Regulatory Think Tank
        </p>

        <br></br>
        <div className="text-left">
          <p style={{ color: "var(--description-color)", fontSize: "1rem" }}>
            Our mission is to be a platform for policymakers and blockchain
            builders to collaborate on the technical and regulatory research of
            blockchain technologies that promote a web3-friendly regulatory
            environment. The speed of blockchain innovation is outpacing the
            regulatory environment and leaving legislators behind in
            understanding and creating web3-friendly regulation.
          </p>
          <br />
          <p style={{ color: "var(--content-color)", fontSize: "1rem" }}>
            The underlying technology propelling the blockchain will
            continuously advance regardless of any political regulation, and for
            us to capture the benefits of emerging and innovative blockchain
            technology, we need to understand how and where regulation of the
            blockchain connect.
          </p>
        </div>
      </div>
      <style>{inlineStyles}</style>
    </div>
  );
}
