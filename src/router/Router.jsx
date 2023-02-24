import Main from "../pages/Main";
import FilmsPages from "../pages/FilmsPages";

export const privateRoutes = [
    // { path: "*", element: <Error/>, exact: true },
    // { path: "/artists/albums/:id", element: <Albums/>, exact: true },
    // { path: "/artists/albums/:artist/:id", element: <Tracks/>, exact: true },
    { path: "/", element: <Main/>, exact: true },
    { path: "/films", element: <FilmsPages/>, exact: true },
];