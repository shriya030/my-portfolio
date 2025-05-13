import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = ({ darkMode }) => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: darkMode ? "#ffffff" : "#6366f1"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.2,
            random: true
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          links: {
            enable: true,
            distance: 150,
            color: darkMode ? "#ffffff" : "#6366f1",
            opacity: 0.2,
            width: 1
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5
              }
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};

export default ParticlesBackground; 