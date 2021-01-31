interface ArrowThickRightProps {
  className?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  stroke?: string;
  fill?: string;
  pathStyle?: any;
}

const ArrowThickRight = (props: ArrowThickRightProps) => {
  const {
    className = "",
    height = "22",
    width = "18",
    viewBox = "0 0 18 22",
    fill = "white",
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M7.6542 19.1254L8.54616 20.0793C8.92384 20.4832 9.53455 20.4832 9.90822 20.0793L17.7189 11.7305C18.0966 11.3266 18.0966 10.6735 17.7189 10.2739L9.90822 1.92073C9.53054 1.51682 8.91982 1.51682 8.54616 1.92073L7.6542 2.87463C7.2725 3.28284 7.28053 3.94885 7.67027 4.34846L12.5118 9.28127H0.964456C0.43008 9.28127 0.000169037 9.74104 0.000169037 10.3125V11.6875C0.000169037 12.259 0.43008 12.7188 0.964456 12.7188H12.5118L7.67027 17.6516C7.27652 18.0512 7.26848 18.7172 7.6542 19.1254Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width={width}
            height={height}
            fill={fill}
            transform="matrix(-1 0 0 1 18 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowThickRight;
