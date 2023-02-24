import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectFilmModal} from "../store/filmDetail/film-selectors";
import {changeModalActive} from "../store/changeModalActive/changeModalActive-actions";
import {selectActiveModal} from "../store/changeModalActive/changeModalActive-selectors";

const Modal = () => {
    const dispatch = useDispatch();

    const filmListModal = useSelector(selectFilmModal);
    const activeModal = useSelector(selectActiveModal);

    const closeModal=()=>{
        dispatch(changeModalActive(false));
    }

    return (
        <div
            className={activeModal ? 'modal-block modal-block--show stop-scrolling' : 'modal-block'}
             onClick={() => closeModal()}
        >
            {filmListModal && <div className="movie-modal" onClick={e => e.stopPropagation()}>
                <div className="movie-modal__img">
                    <img className="movie-modal__img-el" src={filmListModal.posterUrl} alt=""/>
                </div>
                <div className="movie-modal__text">
                    <div className="movie-modal__text-top">
                        {filmListModal.nameRu
                            ? <div className="movie-modal__text-title">
                                {filmListModal.nameRu}
                            </div>
                            : ``}

                        {filmListModal.year
                            ? <div className="movie-modal__text-year">
                                {filmListModal.year}
                            </div>
                            : ``}

                        {/*            {movie.rating ? <div className="movie-modal__text-rating ${(movie.rating !== 'null') && `${showMoviesRatingModal(movie.rating)}`*/}
                        {/*        }">*/}
                        {/*${movie.rating}*/}
                        {/*</div> : ``}*/}

                        {filmListModal.ratingAgeLimits
                            ? <div className={[`movie-modal__text-age-limit`, (filmListModal.ratingAgeLimits)]}>
                                {filmListModal.ratingAgeLimits}+
                            </div>
                            : ``}

                    </div>
                    <div className="movie-modal__text-middle">
                        {filmListModal.countries
                            ? <div className="movie-modal__text-country">
                                {filmListModal.countries.map((el) => <span key={el.country}>{el.country} </span>)}
                            </div>
                            : ``}

                        {filmListModal.genres
                            ? <div className="movie-modal__text-genre">
                                Жанры: {filmListModal.genres.map((el) => <span key={el.genre}>{el.genre} </span>)}
                            </div>
                            : ``}

                        {filmListModal.description
                            ? <div className="movie-modal__text-description">
                                {filmListModal.description}
                            </div>
                            : ``}

                    </div>
                    <div className="bottom-block">
                        <button
                            onClick={() => dispatch(changeModalActive(false))}
                                className="bottom-block__close">Закрыть
                        </button>
                        {/*<button className="bottom-block__trailer">Трейлер</button>*/}
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Modal;