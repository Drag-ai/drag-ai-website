import { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export const NeuralBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.4,
            },
          },
        },
      },
      particles: {
        color: {
          value: '#06B6D4',
        },
        links: {
          color: '#818CF8',
          distance: 150,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: window.innerWidth < 768 ? 30 : 60,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
      reduceDuplicates: true,
    }),
    []
  );

  return (
    <div className="nn-bg" data-testid="neural-background">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="absolute inset-0"
      />
    </div>
  );
};
