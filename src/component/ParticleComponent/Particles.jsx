import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // Background color for visibility
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Change mode to push for bubbles to pop
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            quantity: 10, // Number of bubbles to appear on click
            distance: 200,
          },
          grab: {
            distance: 100,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // Bubble color
        },
        links: {
          enable: false, // Disable links for bubble effect
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 2, // Adjust speed for bubble movement
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 50, // Adjust number of particles
        },
        opacity: {
          value: 0.5, // Bubble opacity
        },
        shape: {
          type: "circle", // Ensure bubbles are circles
        },
        size: {
          value: { min: 2, max: 5 }, // Bubble size range
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
