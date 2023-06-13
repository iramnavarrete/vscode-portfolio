import { IconProps } from './types';

function NavigationArrowIcon({
  size,
  color,
  style,
  className,
}: IconProps) {
  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 0 20 20"
      style={style || {}}
      className={className || ''}
    >
      <g
        xmlns="http://www.w3.org/2000/svg"
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-100.000000, -6639.000000)"
          fill={color}
        >
          <g
            id="icons"
            transform="translate(56.000000, 160.000000)"
          >
            <path
              d="M44,6489 L45.393,6490.435 L53,6482.828 L53,6499 L55,6499 L55,6482.828 L62.586,6490.414 L64,6489 C60.339,6485.339 57.504,6482.504 54,6479 C50.034,6482.966 52.834,6480.166 44,6489"
              id="arrow_up-[#351]"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

NavigationArrowIcon.defaultProps = {
  color: '#fff',
  size: 30,
};

export default NavigationArrowIcon;
