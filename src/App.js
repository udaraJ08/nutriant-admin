import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import routes from "./routes";
import TopNavigation from "./components/TopNavigation/TopNavigation";

function App() {
    return (
        <div className="App">
            <TopNavigation />
            <Routes>
                {routes.map((e, index) => {
                    return <Route key={index} path={e.path} element={e.component}/>
                })}
            </Routes>
        </div>
    );
}

export default App;
