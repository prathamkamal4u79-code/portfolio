import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secretary</h4>
                <h5>SUC Dance Crew</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>TEDx Event at NIT Kurukshetra</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Head</h4>
                <h5>Aeromodelling Club</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Manager</h4>
                <h5>Visionworx</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
