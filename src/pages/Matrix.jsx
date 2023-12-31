function Matrix() {
  const inlineStyles = `

    .body {
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        line-height: 1.7;
        color: var(--effect-2);
        background-color: #1f2029;
        margin: 0;
        padding: 0;

      }
      
      p{
        font-family: 'Poppins', sans-serif;
        line-height: 1.7;
        color: var(--effect-2);
        margin: 0;
      }

      .section-fluid-main{
        position: relative;
        display: block;
        overflow: hidden;
        width: calc(100% - 10px);
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 940px;
        padding: 100px 0;
      }
      .section-row{
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
      }
      .section-row:hover .section-col{
        opacity: 0.1;
      }
      .section-col{
        position: relative;
        width: 100%;
        -ms-flex: 0 0 50%;
        flex: 0 0 calc(100% / 3);
        max-width: 100%;
        transition: opacity 250ms linear;
        justify-content: center;
        align-items: center;
        
      }
      .section-row .section-col:hover{
        opacity: .5;
      }
      .section{
        position: relative;
        display: block;
        width: 100%;
        overflow: hidden;
        cursor: pointer;
        padding: 15px;
        justify-content: center;
        align-items: center;
      }

      .section-in {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .section-in{
        display: block;
        width: 100%;
        height: auto;
        transition: transform 250ms linear;
      }
      .section-col:hover .section-in{
        transform: scale(1.2);
          opacity: 0.5;
      }
      
      .hover-text{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 100;
        pointer-events: none;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        -ms-flex-pack: center;
        text-align: center;
          -ms-flex-item-align: center;
          align-self: center;
      }
      .hover-text h2{
        font-family: 'Poppins', sans-serif;

        
        line-height: 1.5;
        color: var(--effect-2);
        opacity: 0;
        transform: scale(0.8);
        transition: transform 250ms linear, opacity 250ms ease;
      }
      .section-col:hover + .hover-text h2{
        opacity: 1;
        transform: scale(1);
      }
      
          
      @media (max-width: 767px) {
        .section-col{
          -ms-flex: 0 0 100%;
          flex: 0 0 100%;
          max-width: 100%;
        }
        .hover-text h2{
          font-size: 3vw;
        }
        .section-fluid-main {
            position: relative;
          }
          
          .section-fluid-main h1 {
            position: sticky;
            top: 0;
            z-index: 1;
          }
        }
        .section-row .section-col {
          position: relative;
          width: 100%;
          -ms-flex: 0 0 50%;
          flex: 0 0 calc(100% / 3);
          max-width: 100%;
          transition: opacity 250ms linear;
          justify-content: center;
          align-items: center;
        }

          .header {
            color: var(--header-color);
            font-weight: bold;
            font-size: 1.5rem;
          }

          .topic {
            color: var(--hover-text);
            font-size: 1.5rem;
          }

          .description {
            color: var(--hover-subtext);
            font-size: 1.5rem;
          }

          .image1 {
            background-image: var(--image1);
            
          }

          .image2 {
            background-image: var(--image2);
          }
        `;

  return (
    <div className="section-fluid-main">
      <div className="section-row">
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "200px",
                  height: "200px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="text-left mb-5 pl-10">
              <div className="header">Electricity</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="e10.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "200px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "100px",
              height: "3px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "100px",
              height: "3px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to companies that are producing the
            electricity that powers the blockchain.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "200px",
                  height: "200px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="text-left mb-5 pl-10">
              <div className="header">Electricity</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Protecting Consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="list-disc pl-12 description">
                    <li>
                      Proof of Stake (PoS) consensus algorithms that require
                      significantly less energy
                    </li>
                    <li>
                      Byzantine Fault Tolerance (BFT) protocols ensuring fault
                      tolerance
                    </li>
                    <li>
                      Advanced encryption techniques for secure transactions and
                      data privacy
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col" id="section1">
          <div className="section">
            <div className="section-in">
              <div
                className="image1" // Apply the className for background image styles
                style={{
                  width: "200px",
                  height: "200px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image1)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="text-left mb-5 pl-10">
              <div className="header">Electricity</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Protecting consumers from loss of use due to a
                        geopolitical situation
                      </li>
                      <li>
                        Amount of electricity required to maintain the
                        blockchain and the amount per transaction
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Potential geopolitical risks leading to electricity
                        access disruptions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Inability to use the blockchain to solve real-world
                        problems
                      </li>
                      <li>Inhibiting technological growth</li>
                      <li>Limiting economic growth</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Potential risks of concentration and control by certain
                        countries
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="e10.png"
                alt="Logo"
                style={{
                  display: "block",
                  width: "200px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "-3%",
              transform: "translate(-50%, -50%)",
              width: "100px",
              height: "3px",
              background: "var(--nav5)",
            }}
          ></div>
          <div
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1%",
              transform: "translate(50%, 50%)",
              width: "100px",
              height: "3px",
              background: "var(--nav5)",
            }}
          ></div>
        </div>
        <div className="hover-text">
          <h2
            className="text-3xl"
            style={{ maxWidth: "400px", color: "var(--hover-subtext)" }}
          >
            This row applies only to companies that are producing the
            electricity that powers the blockchain.
          </h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <div
                className="image2" // Apply the className for background image styles
                style={{
                  width: "200px",
                  height: "200px", // Set a specific height to ensure visibility
                  margin: "0 auto",
                  backgroundImage: "var(--image2)", // Set the background image using CSS variable
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Ensure the background image isn't repeated
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>
            <div className="text-left mb-5 pl-10">
              <div className="header">Settlement Layer</div>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Government Concerns</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Not being able to update / edit fraudulent transactions
                      </li>
                      <li>
                        Not being able to identify immoral activity that could
                        be deemed fraudulent
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Consumer Risks</h3>
                    <ul className="list-disc pl-12 description">
                      <li>Lack of due diligence</li>
                      <li>Security and attacks</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to over-regulation</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Potential centralization of the blockchain settlement
                        layer.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <div>
                    <h3>Cons to lack of regulation</h3>
                    <ul className="list-disc pl-12 description">
                      <li>
                        Potential displacement of development activities to more
                        permissive jurisdictions
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="pl-12">
                <li className="topic">
                  <h3>
                    Does blockchain technology currently exist to fulfill these
                    obligations, and if so, what is it?
                  </h3>

                  <ul className="list-disc pl-12 description">
                    <li>
                      Proof of Stake (PoS) consensus algorithms that require
                      significantly less energy
                    </li>
                    <li>
                      Byzantine Fault Tolerance (BFT) protocols ensuring fault
                      tolerance
                    </li>
                    <li>
                      Advanced encryption techniques for secure transactions and
                      data privacy
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <style>{inlineStyles}</style>
      </div>
    </div>
  );
}

export default Matrix;
