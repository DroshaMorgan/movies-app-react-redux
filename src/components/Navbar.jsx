import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeAPI, changeSearchAPI } from "../store/changeAPI/changeAPI-actions";


const Navbar = () => {
    const API_URL_TOP250 = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=";
    const API_URL_TOP_AWAIT = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=";
    const API_URL_POPULAR =
        "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=";
    const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

    const dispatch = useDispatch();
    const changeApiLink = (api) => {
        dispatch(changeAPI(api))
        // dispatch(changeSearchAPI(``))
    }

    const searchMovieSubmit = (e) => {
        e.preventDefault();
        if (e.target[0].value) {
            // dispatch(changeSearchAPI(`${API_URL_SEARCH}${e.target[0].value}&page=`))
            // dispatch(changeAPI(``))
            dispatch(changeAPI(`${API_URL_SEARCH}${e.target[0].value}&page=`))
        }
    }

    // const searchMovieSubmit=(e)=>{
    //     e.preventDefault();
    //     if (e.target[0].value) {
    //         dispatch(loadFilms(API_URL_SEARCH, e.target[0].value));
    //     }
    // }


    return (
        <div>
            <header className="header">
                <div className="header__title">
                    <Link to="/" className="header__title-el">Movie-App</Link>
                </div>
                <div className="header__links">
                    <a onClick={() => changeApiLink(API_URL_TOP250)}
                        /*to="/top250"*/ className="header__link header__links-top250">250 лучших фильмов</a>


                    <a onClick={() => changeApiLink(API_URL_POPULAR)}
                        /*to="/popular"*/ className="header__link header__links-popular">Популярные фильмы</a>


                    <a onClick={() => changeApiLink(API_URL_TOP_AWAIT)}
                        /*to="/await"*/ className="header__link header__links-top-await">Самые ожидаемые фильмы</a>
                </div>
                <form onSubmit={(e) => searchMovieSubmit(e)} className="header__search-form">
                    <input type="text" className="header__search" placeholder="Введите фильм" />
                </form>
            </header>
        </div>
    );
};

export default Navbar;