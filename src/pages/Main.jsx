import React from 'react';
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div className="main-bcg">
            <div className="main-bcg__blackout">
                <div className="main-bcg__info-block"
                     style={{display:"flex", justifyContent:"center", color: "white", fontSize: 30}}>
                    <div className="main-bcg__info-block-top">Вся доступная информация о фильмах - здесь!
                    </div>
                    <Link  to="/films" className="main-bcg__info-block-middle">Начать</Link>
                </div>
            </div>
        </div>
    );
};

export default Main;