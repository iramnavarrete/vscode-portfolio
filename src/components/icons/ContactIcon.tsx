import { IconProps } from './types';

function ContactIcon({
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
        className="icon-navigation-bar"
        d="M3.75,17.41,6.14,19.8A2,2,0,0,0,9,19.8l1.36-1.36a2,2,0,0,0,0-2.83l-.89-.9h0a16.48,16.48,0,0,1,5.64-5.65l0,0,.89.9a2,2,0,0,0,2.83,0l1.34-1.33a2,2,0,0,0,0-2.83L17.78,3.39a1,1,0,0,0-1.26-.13h0A46,46,0,0,0,3.63,16.15h0A1,1,0,0,0,3.75,17.41Z"
      />
    </svg>
  );
}

ContactIcon.defaultProps = {
  color: '#fff',
  size: 30,
};

export default ContactIcon;
