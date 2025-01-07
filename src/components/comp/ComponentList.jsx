import React, { useEffect, useState } from "react";
import { Dropdown, Pagination } from "flowbite-react";

const ComponentList = ({
  pageTitle,
  typeList,
  selectedType,
  size,
  ListComponent,
  dataList,
}) => {
  const [selected, setSelected] = useState(typeList ? typeList[0].name : "");
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    typeList ? selectedType(selected) : "";
  }, [selected, currentPage]);

  function handelselected(type) {
    setSelected(type);
    setCurrentPage(1);
  }

  return (
    <div className="flexcol bor p-5 hw100 overflow-auto text-slate-800">
      <h2 className="text-2xl font-semibold">
        {pageTitle ? pageTitle : "No Title"}
      </h2>
      <div className={`${typeList ? "" : "none"} flex jcfe mt-3 bor`}>
        <Dropdown label={selected}>
          {typeList
            ? typeList.map((type) => (
                <Dropdown.Item
                  key={type.name}
                  onClick={() => handelselected(type.name)}
                >
                  {type.name}
                </Dropdown.Item>
              ))
            : ""}
        </Dropdown>
      </div>
      <div className="flex-1 my-2 bor">
        {ListComponent ? (
          <ListComponent dataList={dataList} pageNumber={currentPage} />
        ) : (
          "No Component"
        )}
      </div>
      <div className={`${size ? "" : "none"} flex sm:justify-center bor`}>
        <Pagination
          currentPage={currentPage}
          totalPages={size ? size : 1}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ComponentList;
