import React from "react";

interface SearchIconProps {
  className?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  stroke?: string;
  fill?: string;
  pathStyle?: any;
}

const SearchIcon = (props: SearchIconProps) => {
  const {
    className = "",
    height = "24",
    width = "24",
    viewBox = "0 0 24 24",
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
      <path
        d="M23.202 21.434L16.673 14.905C18.0981 13.0316 18.7584 10.6869 18.5204 8.34513C18.2824 6.00338 17.1637 3.83947 15.3908 2.29118C13.6179 0.742893 11.323 -0.0741691 8.97057 0.00529728C6.61809 0.0847637 4.38363 1.05483 2.71923 2.71923C1.05483 4.38363 0.0847637 6.6181 0.00529728 8.97057C-0.0741691 11.323 0.742893 13.6179 2.29118 15.3908C3.83947 17.1637 6.00338 18.2824 8.34513 18.5204C10.6869 18.7584 13.0316 18.0981 14.905 16.673L21.434 23.202C21.6704 23.4326 21.9877 23.5617 22.318 23.5617C22.6483 23.5617 22.9655 23.4326 23.202 23.202C23.4362 22.9674 23.5678 22.6495 23.5678 22.318C23.5678 21.9865 23.4362 21.6686 23.202 21.434ZM2.56799 9.31499C2.56799 7.97997 2.96387 6.67493 3.70557 5.56489C4.44727 4.45486 5.50148 3.5897 6.73488 3.07881C7.96828 2.56792 9.32548 2.43424 10.6349 2.69469C11.9442 2.95514 13.147 3.59802 14.091 4.54202C15.035 5.48603 15.6778 6.68876 15.9383 7.99814C16.1987 9.30751 16.0651 10.6647 15.5542 11.8981C15.0433 13.1315 14.1781 14.1857 13.0681 14.9274C11.9581 15.6691 10.653 16.065 9.31799 16.065C7.52843 16.0629 5.81277 15.351 4.54736 14.0856C3.28195 12.8202 2.57011 11.1046 2.56799 9.31499Z"
        fill={fill}
      />
    </svg>
  );
};

export default SearchIcon;
