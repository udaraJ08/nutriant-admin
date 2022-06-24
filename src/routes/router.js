import {lazy} from "react";

const dashboardRoutes = [
    {
        path: 'dashboard',
        component: lazy(() => import('../views/Dashboard/Dashboard'))
    },
]

export default dashboardRoutes
