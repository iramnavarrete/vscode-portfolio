import { IconProps } from './types';

function ExplorerToggleIcon({
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
      viewBox="0 0 24 24"
      style={style || {}}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M8,3 L8,21 L5,21 C3.94563773,21 3.08183483,20.18415 3.00548573,19.1492661 L3,19 L3,5 C3,3.94563773 3.81587733,3.08183483 4.85073759,3.00548573 L5,3 L8,3 Z M19,3 C20.0543909,3 20.9181678,3.81587733 20.9945144,4.85073759 L21,5 L21,19 C21,20.0543909 20.18415,20.9181678 19.1492661,20.9945144 L19,21 L10,21 L10,3 L19,3 Z"
        id="形状"
      />
    </svg>
  );
}

ExplorerToggleIcon.defaultProps = {
  color: '#fff',
  size: 30,
};

export default ExplorerToggleIcon;
