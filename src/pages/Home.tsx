import { Box, Image, Img } from '@chakra-ui/react';
import { ParticlesBackground } from '../components';

export default function Home() {
  return (
    <Box className="relative flex flex-1">
      <ParticlesBackground />
      <div className="page-container">
        <Box className="flex flex-1 w-full h-full">
          <Box className="flex flex-1 flex-row justify-between p-32">
            <Box className="flex flex-row flex-grow-0 basis-full flex-grow text-white flex-end">
              <p>Hola soy Iram</p>
            </Box>
            <Image alt="profile" className="max-w-[600px] max-h-[600px] rounded-full" src="img/profile.png" />
          </Box>
        </Box>
      </div>
    </Box>
  );
}
