import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { LoginPage } from "../../pages/Login/Login"

import {
    createBrowserRouter, redirect
} from "react-router-dom";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        loader: () => {
            if (localStorage.getItem('username')) {
                throw redirect('/dashboard/welcome')
            }
            return null
        }
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => {
            if (!localStorage.getItem('username')) {
                throw redirect('/')
            }
            return null
        }
    },
]);
