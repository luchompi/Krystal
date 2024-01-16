import Book from "../../assets/json/Book.json";
import CardLayout from "../../layouts/CardLayout";
import FileComponent from "../../components/FileComponent";
import { useEffect, useState } from "react";
import EventEmitter from "../../services/EventEmitter";
import ElementTable from "../../components/ElementTable";
const FileUpload = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    EventEmitter.addListener("loadData", (data) => {
      setData(data);
    });
  }, []);
  return (
    <div className="col col-lg-7">
      <CardLayout
        icon={Book}
        header={"Carga masiva de productos"}
        title={"Módulo de carga de inventario"}
        component={
          <>
            <FileComponent loadType={"create"} />
            {data && data.length > 0 && <ElementTable data={data} />}
          </>
        }
      />
    </div>
  );
};

export default FileUpload;
