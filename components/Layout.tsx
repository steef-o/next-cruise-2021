import React from "react";
import Meta from "./Meta";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full">
      <Meta />
      <div className="mx-auto w-11/12 sm:max-w-lg">{children}</div>
    </div>
  );
};

export default Layout;
