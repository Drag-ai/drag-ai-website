import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const PARTICLE_COLOR = '#8B5CF6';
const LINK_COLOR = '#EC4899';

// Pure helper extracted to keep cyclomatic complexity of the component low
// and to keep the options object reference stable for tsparticles.
const buildParticlesOptions = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return {
    background: { color: { value: 'transparent' } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: PARTICLE_COLOR },
      links: {
        color: LINK_COLOR,
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: isMobile ? 30 : 60,
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
};

export const NeuralBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // `setInit` from useState is stable by React's contract,
    // so this effect should run exactly once on mount.
    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setInit(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const options = useMemo(buildParticlesOptions, []);

  if (!init) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10"
      data-testid="neural-background"
    >
      <Particles id="tsparticles" options={options} />
    </div>
  );
};
