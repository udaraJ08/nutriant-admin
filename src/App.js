import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import routes from "./routes";
import "./assets/theme.css"
import awsconfig from "./aws-exports"
import {Amplify} from "aws-amplify"
import TopNavigation from "./components/TopNavigation/TopNavigation";

Amplify.configure(awsconfig)

function App() {
    return (
        <div className="App">
            <TopNavigation />
            <div className="p-3">
                <Routes>
                    {routes.map((e, index) => {
                        return <Route key={index} path={e.path} element={e.component}/>
                    })}
                </Routes>
            </div>
        </div>
    );
}

export default App;
