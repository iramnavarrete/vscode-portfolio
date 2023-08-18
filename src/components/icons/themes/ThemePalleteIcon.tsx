import { IconProps } from 'types';

function ThemePalleteIcon({
  size,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      width={`${size}px`}
      version="1.1"
      id="Layer_1"
      viewBox="0 0 501.333 501.333"
      xmlSpace="preserve"
    >
      <path
        fill="#3A5569"
        d="M250.667,0C212.267,0,176,8.533,144,23.467c29.867,17.067,49.067,49.067,49.067,86.4  c0,55.467-44.8,100.267-100.267,100.267c-33.067,0-61.867-16-80-39.467c-8.533,25.6-12.8,52.267-12.8,80  c0,138.667,112,250.667,250.667,250.667s250.667-112,250.667-250.667S389.333,0,250.667,0z"
      />
      <circle
        fill="#FEC656"
        cx="149.333"
        cy="356.267"
        r="55.467"
      />
      <circle
        fill="#F16D6E"
        cx="284.8"
        cy="391.467"
        r="49.067"
      />
      <circle
        fill="#60C3AB"
        cx="386.133"
        cy="276.267"
        r="66.133"
      />
      <circle
        fill="#EDB997"
        cx="364.8"
        cy="137.6"
        r="45.867"
      />
    </svg>
  );
}

ThemePalleteIcon.defaultProps = {
  color: '#fff',
  size: 30,
};

export default ThemePalleteIcon;
