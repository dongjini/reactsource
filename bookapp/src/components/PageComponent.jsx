import React from "react";

const PageComponent = ({ data, movePage }) => {
  return (
    <nav>
      <ul className="flex justify-end px-3 py-1.5 pl-0">
        {data.prev ? (
          <li className="border-2 border-gray-200 rounded-[100px]">
            <a
              href=""
              className="text-sm relative block px-2 py-1 text-sky-600 leading-6 text-center"
              onClick={() =>
                movePage({
                  page: data.prevPage,
                  genre: data.pageRequestDTO.genre,
                  keyword: data.pageRequestDTO.keyword,
                })
              }
            >
              Prev
            </a>
          </li>
        ) : (
          <></>
        )}
        {data.pageNumList.map((pageNum) => (
          <li
            key={pageNum}
            className={`border-2 border-gray-200 rounded-[100px]  ${data.current === pageNum ? "bg-sky-300" : ""}`}
          >
            <a
              href=""
              className="text-sm relative block px-2 py-1 text-sky-600 leading-6 text-center"
              onClick={() =>
                movePage({
                  page: pageNum,
                  genre: data.pageRequestDTO.genre,
                  keyword: data.pageRequestDTO.keyword,
                })
              }
            >
              {pageNum}
            </a>
          </li>
        ))}
        {data.next ? (
          <li className="border-2 border-gray-200 rounded-[100px]">
            <a
              href=""
              className="text-sm relative block px-2 py-1 text-sky-600 leading-6 text-center"
              onClick={() =>
                movePage({
                  page: data.nextPage,
                  genre: data.pageRequestDTO.genre,
                  keyword: data.pageRequestDTO.keyword,
                })
              }
            >
              Next
            </a>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};

export default PageComponent;
