import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "Graphic Design",
    description: "Focus on creating clean, engaging, and purpose driven designs that align with brand identity and audience needs. From social media creatives to posters and digital assests"
  },
  {
    title: "UX Design",
    description: "Focusing on creating user centered experiences by understanding user needs, improving navigation, and designing smooth, intuitive interactions"
  },
  {
    title: "UI Design",
    description: "Designing visually appealing and consistent user interfaces that align with brand identity while ensuring clarity, balance, and usability."
  },
  {
    title: "Video Editng",
    description: "Creating engaging, platform optimized videos with strong pacing, clean cuts, and storytelling to maximize reach and audience retention."
  }
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO" id="services">
      <div className="what-box">
        <h2 className="title">
          My<span className="hat-h2"></span>
          <div>
            Services<span className="do-h2"></span>
          </div>
        </h2>
        <p style={{ color: 'white', marginTop: '1rem', fontSize: '1.2rem', maxWidth: '600px', opacity: 0.8 }}>
          From idea to execution, my process focuses on creativity, efficiency, and impactful results.
        </p>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          
          {services.map((service, idx) => (
            <div
              key={idx}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, idx)}
            >
              <div className="what-border1">
                <svg height="100%">
                  {idx === 0 && (
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                    />
                  )}
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>
  
              <div className="what-content-in">
                <h3>{`0${idx + 1}`}</h3>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container && sibling.classList.contains("what-content")) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}

