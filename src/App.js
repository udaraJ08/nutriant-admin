import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import routes from "./routes";
import "./assets/theme.css"
import awsconfig from "./aws-exports"
import {Amplify} from "aws-amplify"
import Login from "./views/Login/Login";

Amplify.configure(awsconfig)

function App() {

    const navigate = useNavigate()

    const routeGuard = () => {
        const user = window.localStorage.getItem('user')

        if (user) {
            return routes.map((e, index) => {
                return <Route key={index} path={e.path} element={e.component}/>
            })
        } else navigate('/')
    }

    return (
        <div className="App">
            <div>
                <Routes>
                    <Route path={'/'} element={<Login/>}/>
                    <Route path={'*'} element={<Login/>}/>
                    {routeGuard()}
                </Routes>
            </div>
        </div>
    );
}

export default App;
