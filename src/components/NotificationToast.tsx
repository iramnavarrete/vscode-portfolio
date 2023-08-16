import { Box, CloseButton } from '@chakra-ui/react';
import { NotificationProps } from 'types';

function NotificationToast({ title, description, closeToast }: NotificationProps) {
  return (
    <Box className="flex flex-col border-[1px] border-border p-3 text-white">
      <Box className="flex flex-row justify-between">
        <Box className="flex flex-row items-center">
          {title}
        </Box>
        <CloseButton onClick={closeToast} />
      </Box>
      <Box className="flex flex-col">
        <Box>
          {description}
        </Box>
      </Box>
    </Box>
  );
}

NotificationToast.defaultProps = {
  description: '',
};

export default NotificationToast;
