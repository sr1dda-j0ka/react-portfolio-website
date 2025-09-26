import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Background() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0B0B0C" },
        particles: {
          number: { value: 120, density: { enable: true, value_area: 800 } },
          color: { value: "#FFD700" }, // golden stars
          shape: {type: ["circle", "triangle"]},
          opacity: { value: 1, random: true,anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false } },
          size: { value: 2, random: { enable: true, minimumValue: 0.5 } }, // small stars
          move: {
            enable: true,
            speed: 1.5,
            direction: "bottom-right", // makes them move diagonally
            straight: false,
            out_mode: "out",
            random: true,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
      }}
    />
  );
}
