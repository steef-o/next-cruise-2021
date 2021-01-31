interface ArrowThickLeftProps {
  className?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  stroke?: string;
  fill?: string;
  pathStyle?: any;
}

const ArrowThickLeft = (props: ArrowThickLeftProps) => {
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
          d="M10.3458 2.87458L9.45384 1.92068C9.07616 1.51677 8.46545 1.51677 8.09178 1.92068L0.281062 10.2695C-0.096617 10.6734 -0.096617 11.3265 0.281062 11.7261L8.09178 20.0793C8.46946 20.4832 9.08018 20.4832 9.45384 20.0793L10.3458 19.1254C10.7275 18.7172 10.7195 18.0511 10.3297 17.6515L5.48821 12.7187L17.0355 12.7187C17.5699 12.7187 17.9998 12.259 17.9998 11.6875V10.3125C17.9998 9.74099 17.5699 9.28123 17.0355 9.28123L5.48821 9.28123L10.3297 4.34841C10.7235 3.9488 10.7315 3.28279 10.3458 2.87458Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width={width}
            height={height}
            fill={fill}
            transform="matrix(1 0 0 -1 0 22)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowThickLeft;
