import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectFilms} from "../store/films/films-selectors";
import Modal from "./Modal";
import {loadModalFilms} from "../store/filmDetail/film-actions";
import {changeModalActive} from "../store/changeModalActive/changeModalActive-actions";
import {selectSearchMovie} from "../store/searchMovie/searchMovie-selectors";
import {setFilms} from "../store/films/films-actions";

const FilmList = () => {
    const dispatch = useDispatch();

    const filmList = useSelector(selectFilms);

    function showMoviesRating(rating) {
        if (+rating) {
            if (rating >= 8.8) {
                return "movie-block__text-rating_color-top";
            } else if (rating >= 7.5 && rating < 8.8) {
                return "movie-block__text-rating_color-green";
            } else if (rating < 7.5 && rating > 5.9) {
                return "movie-block__text-rating_color-yellow";
            } else {
                return "movie-block__text-rating_color-red";
            }
        }
    }

    const showModal = (filmId) => {
        dispatch(loadModalFilms(filmId));
        dispatch(changeModalActive(true));
    }

    window.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
            dispatch(changeModalActive(false));
        }
    })
    return (
        <div className="content container">
            <div className="movies">
                {filmList.films && filmList.films.map(film =>
                    <div onClick={() => showModal(film.filmId)} key={film.filmId} className="movie-block">
                        <div className="movie-block__img">
                            <img className="movie-block__img-el" src={film.posterUrl} alt=""/>
                            <div className="movie-block__img--darkened">
                            </div>
                        </div>
                        <div className="movie-block__text">
                            {film.nameRu
                                ? <div className="movie-block__text-title">
                                    {film.nameRu}
                                </div>
                                : <div className="movie-block__text-title">
                                    {film.nameEn}
                                </div>}

                            {film.year
                                ? <div className="movie-block__text-year">
                                    {film.year}
                                </div>
                                : ``}

                            {film.rating
                                ? <div className={
                                    [`movie-block__text-rating`, showMoviesRating(film.rating)]
                                        .join(' ')
                                }>
                                    {film.rating}
                                </div>
                                : ``}
                        </div>
                    </div>
                )}
            </div>
            <Modal
                // filmListModal={filmList.films}
                // activeModal={activeModal}
                // setActiveModal={setActiveModal}
            />
        </div>
    );
};

export default FilmList;