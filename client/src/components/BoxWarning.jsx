import React from "react";

const BoxWarning = () => {
  return (
    <div>
      <div className="small-box bg-warning">
        <div className="inner">
          <h3>150</h3>

          <p>Tienen poco stock</p>
        </div>
        <div className="icon">
          <i className="ri-line-chart-line"></i>
        </div>
        <a href="#" className="small-box-footer">
          More info <i className="ri-arrow-right-circle-line"></i>
        </a>
      </div>
    </div>
  );
};

export default BoxWarning;
