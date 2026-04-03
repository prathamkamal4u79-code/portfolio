import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hey, It's</h2>
            <h1>
              PRATHAM
              <br />
              <span>KAMAL.</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>UI / UX DESIGNER &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">VIDEO EDITOR</div>
              <div className="landing-h2-2">VIDEO EDITOR</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Pursuing B.Tech from NIT Kurukshetra</div>
              <div className="landing-h2-info-1">Pursuing B.Tech from NIT Kurukshetra</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
