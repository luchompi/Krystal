import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import EventEmitter from "../../services/EventEmitter";

const Form = ({producto = {}}) => {
    const [data, setData] = useState({
        nombre: producto.nombre || "",
        cantidad: producto.cantidad || 0,
        precio: producto.precio || 0,
        precio_unitario: producto.precio_unitario || 0,
        precio_venta: producto.precio_venta || 0,
        ganancia: producto.ganancia || 0,
    });

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        setData({
            ...data,
            precio_unitario: parseFloat(data.precio / data.cantidad).toFixed(2),
            ganancia: parseFloat(
                ((data.precio_venta - data.precio_unitario) / data.precio_unitario) *
                100
            ).toFixed(2),
        });
    }, [data.precio, data.cantidad, data.precio_venta, data.precio_unitario]);

    const handleSubmit = (e) => {
        e.preventDefault();
        producto
            ? EventEmitter.emit("update", data)
            : EventEmitter.emit("create", data);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/*Nombre del producto*/}
            <div className="form-group">
                <label htmlFor="nombre">
                    Nombre <i className="ri-key-line"></i>
                </label>
                <input
                    type="text"
                    className="form-control form-control-border"
                    id="nombre"
                    name="nombre"
                    placeholder="nombre del producto"
                    required
                    onInput={handleInput}
                    value={data.nombre}
                />
            </div>
            <div className="row">
                <div className="col col-lg-6">
                    {/*Cantidad de producto*/}
                    <div className="form-group">
                        <label htmlFor="cantidad">
                            Cantidad de producto <i className="ri-key-line"></i>
                        </label>
                        <input
                            type="number"
                            className="form-control form-control-border"
                            id="cantidad"
                            name="cantidad"
                            placeholder="cantidad del producto"
                            required
                            min={0}
                            onChange={handleInput}
                            value={data.cantidad}
                        />
                    </div>
                </div>
                <div className="col col-lg-6">
                    {/*Precio de compra*/}
                    <div className="form-group">
                        <label htmlFor="precio_compra">
                            Precio de compra <i className="ri-key-line"></i>
                        </label>
                        <input
                            type="number"
                            className="form-control form-control-border"
                            id="precio_compra"
                            name="precio"
                            placeholder="precio de compra del producto"
                            required
                            min={0}
                            onChange={handleInput}
                            value={data.precio}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                {/*Precio unitario*/}
                <div className="col col-lg-6">
                    <div className="info-box">
            <span className="info-box-icon bg-success">
              <i className="ri-exchange-dollar-line"></i>
            </span>
                        <div className="info-box-content">
                            <span className="info-box-text">Precio unitario</span>
                            <span className="info-box-number">
                $ {data.precio_unitario | 0}
              </span>
                        </div>
                    </div>
                </div>
                {/*Precio de venta*/}
                <div className="col col-lg-6">
                    <div className="form-group">
                        <label htmlFor="precio_venta">
                            Precio de venta de producto <i className="ri-key-line"></i>
                        </label>
                        <input
                            type="number"
                            className="form-control form-control-border"
                            id="precio_venta"
                            name="precio_venta"
                            placeholder="Precio de venta del producto"
                            required
                            min={0}
                            onInput={handleInput}
                            value={data.precio_venta}
                        />
                    </div>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col col-lg-6">
                    <div className="info-box">
            <span className="info-box-icon bg-primary">
              <i className="ri-discount-percent-line"></i>
            </span>
                        <div className="info-box-content">
                            <span className="info-box-text">Ganancia</span>
                            <span className="info-box-number">{data.ganancia | 0} %</span>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6">
                    <div className="info-box">
            <span className="info-box-icon bg-warning">
              <i className="ri-exchange-dollar-line"></i>
            </span>
                        <div className="info-box-content">
                            <span className="info-box-text">Ganancia total estimada</span>
                            <span className="info-box-number">
                ${" "}
                                {((data.precio_venta - data.precio_unitario) * data.cantidad) |
                                    0}{" "}
              </span>
                        </div>
                    </div>
                </div>
            </div>
            <span>
        Si ha finalizado y revisado los datos, haz clic{" "}
                <button type="submit" className="btn btn-outline-success">
          Aquí
        </button>
                {" "}
                para procesar
      </span>
        </form>
    );
};

Form.propTypes = {
    producto: PropTypes.object,
};

export default Form;
