import Admin from "./pages/Admin";
import {ADMIN_ROUTE, AUTO_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE} from "./utils/consts";
import Shop from "./pages/Main";
import Auth from "./pages/Auth";
import AutoPage from "./pages/AutoPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: AUTO_ROUTE + '/:id',
        Component: AutoPage
    },
]
