import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">Biography</h3>
        <p className="para">
          Designing seamless user experiences and editing videos that tell powerful stories.<br /><br />
          Blending creativity with strategy to build meaningful digital content.
        </p>
        <div className="about-stats" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>My Location</h4>
            <p style={{ opacity: 0.8 }}>NIT Kurukshetra , Thanesar<br/>Haryana, India</p>
          </div>
          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ color: 'white', fontSize: '2rem', marginBottom: '0.5rem' }}>4+</h4>
            <p style={{ opacity: 0.8 }}>YEARS OF EXPERIENCE</p>
          </div>
          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ color: 'white', fontSize: '2rem', marginBottom: '0.5rem' }}>100+</h4>
            <p style={{ opacity: 0.8 }}>COMPLETED PROJECTS</p>
          </div>
          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ color: 'white', fontSize: '2rem', marginBottom: '0.5rem' }}>50+</h4>
            <p style={{ opacity: 0.8 }}>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
