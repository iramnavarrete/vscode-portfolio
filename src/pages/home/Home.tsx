import { Box } from '@chakra-ui/react';
import { RectButton, ParticlesBackground } from '@/components';
import ProfileAndTechs from './ProfileAndTechs';
import { CodeIcon, DownloadCVIcon } from '@/components/icons';

export default function Home() {
  return (
    <Box className="relative flex flex-1">
      <ParticlesBackground />
      <div className="page-container overflow-y-auto overflow-x-hidden flex flex-1 justify-evenly">
        <Box className="flex flex-1">
          <Box className="flex flex-1 flex-row flex-wrap justify-center gap-x-32 gap-y-8 px-4 py-2">
            <Box className="text-white flex flex-col justify-center gap-4 md:gap-8">
              <Box className="py-2 px-2.5 rounded bg-accent text-xs max-w-max">
                <p>Full-Stack Developer</p>
              </Box>
              <p className="text-xl sm:text-2xl 2xl:text-4xl leading-10">
                “Hello world”
                <br />
                My name is Iram
              </p>
              <p className="text-md xs:max-w-[40ch]">Passionate full-stack developer with 3+ years of experience</p>
              <Box className="flex items-end pt-4 justify-start">
                <RectButton icon={CodeIcon} text="Projects" type="link" to="about" />
                <RectButton icon={DownloadCVIcon} text="Download CV" type="download" to="/files/CV_Iram_Navarrete.pdf" />
              </Box>
            </Box>
            <ProfileAndTechs />
          </Box>
        </Box>
      </div>
    </Box>
  );
}
