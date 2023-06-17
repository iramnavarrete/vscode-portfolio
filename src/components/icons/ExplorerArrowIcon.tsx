import { IconProps } from 'types';

function DownArrowIcon({
  size,
  color,
  style,
}: IconProps) {
  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="none"
      fill={color}
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 0 1024 1024"
      style={style || {}}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
      />
    </svg>
  );
}

DownArrowIcon.defaultProps = {
  color: '#fff',
  size: 30,
};

export default DownArrowIcon;
