import Discipline from "./pages/Discipline";
import Admin from "./pages/Admin";
import MainPage from "./pages/MainPage";
import Group from "./pages/Group";
import Auth from "./pages/Auth";

export const authRoutes = [
    {
        path: '/admin',
        Component: Admin
    }
];


export const publicRoutes = [
    {
        path: '/',
        Component: MainPage
    },
    {
        path: '/discipline',
        Component: Discipline
    },
    {
        path: '/gruops',
        Component: Group
    },
    {
        path: '/auth',
        Component: Auth
    },
]; 