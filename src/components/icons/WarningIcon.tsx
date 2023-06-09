import { IconProps } from 'types';

function WarningIcon({
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
      <path d="M11.9626 4.00678C12.231 3.99278 12.4815 4.13007 12.6157 4.36567C12.6163 4.36567 12.6168 4.36567 12.6174 4.36567L20.9173 18.9131C21.2029 19.4142 20.8717 19.9932 20.2999 19.9932H3.7002C3.12849 19.9932 2.79723 19.4142 3.08287 18.9131L11.3827 4.36567C11.3833 4.36567 11.3838 4.36567 11.3844 4.36567C11.5052 4.15367 11.721 4.01968 11.9626 4.00678H11.9626Z" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" fill={color} />
      <path d="M12 15V8" strokeWidth="2" />
    </svg>
  );
}

WarningIcon.defaultProps = {
  color: '#fff',
  size: 30,
};

export default WarningIcon;
