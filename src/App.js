import './App.scss';
import './normalize.css';
import {Route, Routes} from "react-router-dom";
import {privateRoutes} from "./router/Router";

function App() {
  return (
    <div className="App">
        <Routes>
          {privateRoutes.map(route =>
              <Route key={route.element} exact={route.exact}
                     path={route.path}
                     element={route.element}/>
          )}
        </Routes>
    </div>
  );
}

export default App;
