import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: ['#3b82f6', '#eab308'] },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 4, random: true },
          line_linked: { enable: true, distance: 120, color: '#60a5fa', opacity: 0.3, width: 1 },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.7 } },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;