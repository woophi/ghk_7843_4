type Props = {
  color: '#FA9313' | '#0CC44D' | '#FF5431';
  className?: string;
};

export const Shape = ({ color, className }: Props) => {
  return (
    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M18.0853 1.77777C19.5028 0.722691 21.4446 0.722688 22.8621 1.77777L38.714 13.5771C40.0822 14.5955 40.6541 16.3693 40.1385 17.995L34.0447 37.2092C33.5177 38.871 31.9752 40 30.2319 40H10.7155C8.97218 40 7.42965 38.871 6.90264 37.2092L0.808869 17.995C0.293271 16.3693 0.86521 14.5955 2.23334 13.5771L18.0853 1.77777Z"
        fill={color}
      />
    </svg>
  );
};
