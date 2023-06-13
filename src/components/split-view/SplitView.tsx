import Split from 'react-split';
import { Box } from '@chakra-ui/react';
import Theme from '../../constants/Theme';
import Explorer from '../Explorer';

function SplitView() {
  return (
    <Split
      className="flex flex-1"
      gutterStyle={() => ({ width: '2px', backgroundColor: Theme.colors.border })}
      sizes={[20, 80]}
    >
      <Explorer />
      <Box className="flex flex-1 bg-secondary">Hola</Box>
    </Split>
  );
}

export default SplitView;
