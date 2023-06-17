import { IconProps } from 'types';

function ErrorIcon({
  size,
  color,
}: IconProps) {
  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 0 24 24"
    >
      <path d="M7.95206 16.048L16.0769 7.92297" strokeWidth="2" />
      <path d="M16.0914 16.0336L7.90884 7.85101" strokeWidth="2" />
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" strokeWidth="2" />
    </svg>
  );
}

ErrorIcon.defaultProps = {
  color: '#fff',
  size: 30,
};

export default ErrorIcon;
