import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FilmList from "../components/FilmList";
import { useDispatch, useSelector } from "react-redux";
import {
  loadFilms,
  loadSearchFilms,
  setFilms,
} from "../store/films/films-actions";
import { selectFilms } from "../store/films/films-selectors";
import { setPageCount } from "../store/pagination/pagination-actions";
import {
  selectArrPageCount,
  selectPageCount,
} from "../store/pagination/pagination-selectors";
import { selectSearchMovie } from "../store/searchMovie/searchMovie-selectors";

const FilmsPages = () => {
  const API_KEY = "134870c7-2fa3-414f-b313-805fcae1a058";
  const API_URL_POPULAR =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=";
  const API_URL_MOVIE_DETAILS =
    "https://kinopoiskapiunofficial.tech/api/v2.1/films/";
  const API_URL_SEARCH =
    "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
  const API_URL_TOP250 =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=";
  const API_URL_TOP_AWAIT =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=";

  const dispatch = useDispatch();

  const currentApi = useSelector((state) => state.changeAPIReducer.apiAll);
  useEffect(() => {
    dispatch(loadFilms(currentApi));
  }, [currentApi]);

  const currentSearchQuery = useSelector(
    (state) => state.changeAPIReducer.apiSearch
  );
  useEffect(() => {
    dispatch(loadSearchFilms(currentSearchQuery));
  }, [currentSearchQuery]);

  const filmList = useSelector(selectFilms);
  const currentPagesCount = filmList.pagesCount;

  useEffect(() => {
    dispatch(setPageCount(currentPagesCount));
  }, [currentPagesCount]);

  const pageCount = useSelector(selectPageCount);
  const arrPageCount = useSelector((state) =>
    selectArrPageCount(state, pageCount)
  );

  const changePage = (pageCurrent) => {
    dispatch(loadFilms(currentApi, pageCurrent));
  };

  const changePageActive = (positionCurrent) => {
    const pagination = document.querySelector(".pagination");
    const paginationElements = pagination.querySelectorAll(".pagination__el");
    paginationElements.forEach((el) =>
      el.classList.remove("active-pagination")
    );

    pagination.children[positionCurrent - 1].classList.add("active-pagination");
  };

  return (
    <div>
      <Navbar />
      <FilmList />
      <div className="pagination container">
        {arrPageCount &&
          arrPageCount.map((pageCurrent) => (
            <a
              href="#top"
              onClick={() => {
                changePage(pageCurrent);
                changePageActive(pageCurrent);
              }}
              key={pageCurrent}
              className={[
                `pagination__el`,
                `pagination__el-${pageCurrent}`,
              ].join(" ")}
              data-pagination={pageCurrent}
            >
              {pageCurrent}
            </a>
          ))}
      </div>
    </div>
  );
};

export default FilmsPages;
