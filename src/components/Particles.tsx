import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import Theme from '../constants/Theme';
import { useActiveThemeContext } from '@/context/ThemeContext';

function ParticlesBackground() {
  const { activeTheme } = useActiveThemeContext();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={
          {
            fpsLimit: 60,
            fullScreen: {
              enable: false,
            },
            interactivity: {
              detect_on: 'window',
              events: {
                onHover: {
                  enable: true,
                  mode: ['bubble', 'connect'],
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 200,
                  duration: 2,
                  opacity: 1,
                  size: 30,
                  speed: 3,
                  color: Theme.colors[activeTheme].border,
                },
                connect: {
                  distance: 60,
                  lineLinked: {
                    opacity: 0.2,
                  },
                  radius: 200,
                },
              },
            },
            particles: {
              color: {
                value: '#000000',
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'out',
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 300,
              },
              opacity: {
                value: 0,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 10,
                },
                value: 15,
              },
            },
            retina_detect: true,
          }
        }
      init={particlesInit}
    />
  );
}

export default ParticlesBackground;
