import { IconProps } from 'types';

function EmailIcon({
  size,
  color,
}: IconProps) {
  return (

    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

EmailIcon.defaultProps = {
  color: '#fff',
  size: 30,
};

export default EmailIcon;
