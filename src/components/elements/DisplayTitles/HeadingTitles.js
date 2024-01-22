import React from "react";

export default function HeadingTitles(props) {
  const { children, variant } = props;
  const classDefault = "px-7 py-3 uppercase bg-primary text-secondary font-bold inline-block "
  switch (variant) {
    case "h3":
      return (
        <div className="my-5 flex justify-center items-center">
          <h3 className={`text-sm ${classDefault}`}>
            {children}
            </h3>
        </div>
      );
    default:
      return (
        <div className="my-5 flex justify-center items-center">
          <h2 className={`${classDefault}`}>{children}</h2>
        </div>
      );
  }
}
