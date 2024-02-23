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
    .video-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header {
      color: var(--header-color);
      font-size: 2rem;
    }

    .sub-header {
      color: var(--header-color);
      font-size: 1.5rem;
    }
    
    .content1 {
      color: var(--description-color);
      font-size: 1rem;
    }

    .content2 {
      color: var(--content-color);
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      .video-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      video {
        width: 100%;
        height: auto;
      }
      .header {
        font-size: 1.5rem;
      }
      .sub-header {
        font-size: 1.2rem;
      }
      .content1 {
        font-size: 0.8rem;
      }
      .content2 {
        font-size: 0.8rem;
      }
    }
  `;

  return (
    <div className="container mx-auto pt-20 pb-20 justify-center items-center">
      <p className="header pb-10">Crypto Policy DAO</p>
      <div className="video-center video-container">
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
      <div className=" text-center">
        <br></br>
        <p className="sub-header text-center">
          Web3-friendly Regulatory Think Tank
        </p>

        <br></br>
        <div className="text-center pl-40 pr-40">
          <p className="content1">
            Our mission is to be a platform for policymakers and blockchain
            builders to collaborate on the technical and regulatory research of
            blockchain technologies that promote a web3-friendly regulatory
            environment. The speed of blockchain innovation is outpacing the
            regulatory environment and leaving legislators behind in
            understanding and creating web3-friendly regulation.
          </p>
          <br />
          <p className="content2">
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
