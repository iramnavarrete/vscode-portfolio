import { IconProps } from 'types';

function ChakraUIIcon({
  size,
  color,
}: IconProps) {
  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      stroke="none"
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 0 40 40"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12.398,35c-0.162,0-0.322-0.049-0.459-0.141c-0.33-0.215-0.463-0.624-0.323-0.995l4.192-11.087h-4.797  c-0.341,0-0.645-0.203-0.773-0.518c-0.131-0.316-0.059-0.675,0.182-0.913L26.623,5.245C26.781,5.086,26.992,5,27.214,5  c0.158,0,0.313,0.045,0.444,0.128c0.333,0.21,0.475,0.613,0.344,0.984l-3.848,11.103h4.835c0.343,0,0.647,0.205,0.776,0.523  c0.128,0.318,0.053,0.677-0.191,0.915l-16.59,16.11C12.825,34.914,12.616,35,12.398,35L12.398,35z M13.042,21.103h3.979  c0.275,0,0.534,0.135,0.691,0.361c0.155,0.227,0.189,0.516,0.092,0.772l-2.981,7.887l0.319,0.209L26.924,18.89h-3.945  c-0.272,0-0.527-0.131-0.682-0.352c-0.157-0.22-0.198-0.503-0.11-0.761l2.774-7.998l-0.32-0.203L13.042,21.103z"
      />
    </svg>
  );
}

ChakraUIIcon.defaultProps = {
  color: '#fff',
  size: 30,
};

export default ChakraUIIcon;
