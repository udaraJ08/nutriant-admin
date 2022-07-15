import Dashboard from "../views/Dashboard/Dashboard";
import Login from "../views/Login/Login";

const dashboardRoutes = [
    {
        path: '/',
        component: <Login />
    },
    {
        path: '/dashboard',
        component: <Dashboard />
    },
]

export default dashboardRoutes
