
import { ADMIN_ROUTE, GROUP_ROUTE, DISCIPLINE_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import Admin from "./page/Admin";
import Group from "./page/group";
import Discipline from "./page/discipline";
import Auth from "./page/auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: GROUP_ROUTE,
        Component: Group
    },
    {
        path: DISCIPLINE_ROUTE,
        Component: Discipline
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
];


// export const publicRoutes = [
//     {
//         path: GROUP_ROUTE,
//         Component: Group
//     },
//     {
//         path: DISCIPLINE_ROUTE,
//         Component: Discipline
//     },
//     {
//         path: LOGIN_ROUTE,
//         Component: Auth
//     },

// ];