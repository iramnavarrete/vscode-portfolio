import { Box } from '@chakra-ui/react';
import { ParticlesBackground } from '../../components';
import ProfileAndTechs from './ProfileAndTechs';

export default function Home() {
  return (
    <Box className="relative flex flex-1">
      <ParticlesBackground />
      <div className="page-container overflow-y-auto overflow-x-hidden flex flex-1 justify-center">
        <Box className="flex flex-1">
          <Box className="flex flex-1 flex-row flex-wrap justify-between mx-4 my-8 sm:m-8 md:m-16 gap-8 md:gap-16">
            <Box className="text-white flex flex-col justify-center gap-8">
              <Box className="py-2 px-2.5 rounded bg-accent text-xs max-w-max">
                <p>Full-Stack Developer</p>
              </Box>
              <p className="text-xl sm:text-3xl md:text-4xl leading-snug">
                “Hello world”
                <br />
                My name is Iram
              </p>
              <p className="text-md max-w-[25ch] xs:max-w-[40ch]">Passionate full-stack developer with 3+ years of experience</p>
              <Box className="flex flex-grow-[0.25] items-end justify-end">
                <Box as="button" className="bg-gradient-to-r from-accent to-accent bg-no-repeat bg-bottom bg-[length:100%_3px] sm:bg-bottom bg-[length:100%_5px] md:bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">
                  <p className="text-xl sm:text-3xl md:text-4xl leading-snug">{'<ContactMe />'}</p>
                </Box>
              </Box>
            </Box>
            <ProfileAndTechs />
          </Box>
        </Box>
      </div>
    </Box>
  );
}
