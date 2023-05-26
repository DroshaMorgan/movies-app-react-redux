import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  changeAPI,
  changeSearchAPI,
} from "../store/changeAPI/changeAPI-actions";

const Navbar = () => {
  const [activeSectionPopular, setActiveSectionPopular] = useState(true);
  const [activeSectionTop, setActiveSectionTop] = useState(false);
  const [activeSectionAwait, setActiveSectionAwait] = useState(false);

  const [value, setValue] = useState("");

  const API_URL_TOP250 =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=";
  const API_URL_TOP_AWAIT =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=";
  const API_URL_POPULAR =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=";
  const API_URL_SEARCH =
    "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

  const dispatch = useDispatch();
  const changeApiLink = (api) => {
    dispatch(changeAPI(api));
  };

  const searchMovieSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      dispatch(changeAPI(`${API_URL_SEARCH}${e.target[0].value}&page=`));
      setValue("");
    }
  };

  function setActivePopular() {
    setActiveSectionPopular(true);
    setActiveSectionTop(false);
    setActiveSectionAwait(false);
  }
  function setActiveTop() {
    setActiveSectionPopular(false);
    setActiveSectionTop(true);
    setActiveSectionAwait(false);
  }
  function setActiveAwait() {
    setActiveSectionPopular(false);
    setActiveSectionTop(false);
    setActiveSectionAwait(true);
  }

  return (
    <div>
      <header className="header">
        <div className="header__title">
          <Link to="/" className="header__title-el">
            Movie-App
          </Link>
        </div>
        <div className="header__links">
          <a
            href="#top"
            onClick={() => {
              changeApiLink(API_URL_TOP250);
              setActiveTop();
            }}
            className={
              activeSectionTop ? "top250 header__link" : "header__link"
            }
          >
            250 лучших фильмов
          </a>

          <a
            href="#top"
            onClick={() => {
              changeApiLink(API_URL_POPULAR);
              setActivePopular();
            }}
            className={
              activeSectionPopular ? "top250 header__link" : "header__link"
            }
          >
            Популярные фильмы
          </a>

          <a
            href="#top"
            onClick={() => {
              changeApiLink(API_URL_TOP_AWAIT);
              setActiveAwait();
            }}
            className={
              activeSectionAwait ? "top250 header__link" : "header__link"
            }
          >
            Самые ожидаемые фильмы
          </a>
        </div>
        <form
          onSubmit={(e) => searchMovieSubmit(e)}
          className="header__search-form"
        >
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            className="header__search"
            placeholder="Введите фильм"
          />
        </form>
      </header>
    </div>
  );
};

export default Navbar;
