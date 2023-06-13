import { useState } from 'react';
import { Box, Collapse } from '@chakra-ui/react';
import { DownArrowIcon } from './icons';

function Explorer() {
  const [show, setShow] = useState<boolean>(true);

  const style = {
    transform: show ? 'rotate(0deg)' : 'rotate(-90deg)',
    transition: 'transform 150ms ease', // smooth transition
  };
  return (
    <Box
      className="border-l-2 p-4 bg-primary border-border hidden md:block text-white"
    >
      <Box>
        <Box
          onClick={() => setShow(!show)}
          className="flex flex-row items-center text-sm cursor-pointer"
        >
          <DownArrowIcon style={style} size={15} />
          <p className="ml-2">EXPLORER</p>
        </Box>
        <Collapse in={show} animateOpacity>
          <Box className="flex flex-col ml-8">
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>

          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}

export default Explorer;
