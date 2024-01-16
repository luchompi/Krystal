import React from "react";

const BoxDanger = ({productos}) => {
    return (
        <div>
            <div className="small-box bg-danger">
                <div className="inner">
                    <h3>{productos.length}</h3>
                    <p>Están sin stock</p>
                </div>
                <div className="icon">
                    <i className="ri-alarm-warning-fill"></i>
                </div>
                <a href="#" className="small-box-footer">
                    More info <i className="ri-arrow-right-circle-line"></i>
                </a>
            </div>
        </div>
    );
};

export default BoxDanger;
