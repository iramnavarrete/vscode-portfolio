import { IconProps } from 'types';

function DoubleCheckIcon({
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
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M8 12L13.25 17L22 7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M2 12L7.25 17C7.25 17 8.66939 15.3778 9.875 14"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M16 7L12.5 11"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

DoubleCheckIcon.defaultProps = {
  color: '#fff',
  size: 30,
};

export default DoubleCheckIcon;
