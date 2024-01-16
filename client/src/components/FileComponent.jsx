import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import EventEmitter from "../services/EventEmitter";
import PropTypes from "prop-types";

const FileComponent = ({ loadType }) => {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const firstSheet = workbook.SheetNames[0];
        const secondSheet = workbook.SheetNames[1];
        const excelRows = XLSX.utils.sheet_to_row_object_array(
          loadType === "create"
            ? workbook.Sheets[firstSheet]
            : loadType === "update"
            ? workbook.Sheets[secondSheet]
            : null
        );
        EventEmitter.emit("loadData", excelRows);
      };
      reader.onerror = function (ex) {
        console.log(ex);
      };
      reader.readAsBinaryString(file);
    } else {
      EventEmitter.emit("loadData", []);
    }
  }, [file, loadType]);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            {file ? (
              <div className="alert alert-success alert-dismissible">
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-hidden="true"
                  onClick={() => setFile(null)}
                >
                  <i className="ri-close-circle-line"></i>
                </button>
                <h5>
                  <i className="ri-file-excel-2-line"></i> {file.name} cargado
                  correctamente.
                </h5>
                Para eliminar el archivo cargado, haga click en la "X" de la
                esquina superior derecha.
              </div>
            ) : (
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputFile">Archivo</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="exampleInputFile"
                        onChange={handleFile}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="exampleInputFile"
                      >
                        Seleccione el archivo...
                      </label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="ri-file-excel-line"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

FileComponent.propTypes = {
  loadType: PropTypes.string.isRequired,
};

export default FileComponent;
