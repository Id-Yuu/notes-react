import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import SectionBody from "./SectionBody";
import SectionForm from "./SectionForm";
import { getInitialData } from "../utils";

function Pages() {
  const [datas, setDatas] = useState(getInitialData());
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const initialDatas = await getInitialData();
      setDatas(initialDatas);
    };
    fetchData();
  }, []);

  const onDeleteHandler = (id) => {
    setDatas(datas.filter((data) => data.id !== id));
  };

  const handleSearch = () => {
    return (event) => {
      setSearch(event.target.value);
    };
  };

  const onActiveHandler = (id) => {
    setDatas((prevState) =>
      prevState.map((data) =>
        data.id === id ? { ...data, archived: true } : data
      )
    );
  };

  const onArchiveHandler = (id) => {
    setDatas((prevState) =>
      prevState.map((data) =>
        data.id === id ? { ...data, archived: false } : data
      )
    );
  };

  const onAddDatasHandler = ({ title, body }) => {
    setDatas([
      ...datas,
      {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toDateString(),
        archived: false,
      },
    ]);
  };

  const filteredDatas = !search
    ? datas
    : datas.filter((data) => data.title.toLowerCase().includes(search));

  const activeDatas = filteredDatas.filter((data) => !data.archived);
  const archiveDatas = filteredDatas.filter((data) => data.archived);

  return (
    <>
      <Navbar onSearch={handleSearch()} />
      <SectionForm addData={onAddDatasHandler} />
      <SectionBody
        onDelete={onDeleteHandler}
        onActive={onActiveHandler}
        onArchive={onArchiveHandler}
        activeNotes={activeDatas}
        archivedNotes={archiveDatas}
      />
    </>
  );
}
export default Pages;
