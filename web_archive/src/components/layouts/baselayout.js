import React from "react";
import "./baselayout.css";

const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="baselayout__container">
        <div className="baselayout__blur">
          <div className="baselayout__content">{children}</div>
          <h3 className="h3 baselayout__logo">records</h3>
          <h3 className="h3 fade baselayout__credit">
            a project by{" "}
            <a style={{ color: "black" }} href="https://andrewchen.tech">
              andrew chen
            </a>
          </h3>
        </div>
      </div>
    </>
  );
};
export default BaseLayout;
