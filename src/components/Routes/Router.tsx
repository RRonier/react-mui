import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { LoginPage } from "../../pages/Login/Login"
import { InformationMain } from "../../pages/Information/Information";

import {
    createBrowserRouter, redirect
} from "react-router-dom";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        loader: () => {
            if (localStorage.getItem('user')) {
                throw redirect('/dashboard')
            }
            return null
        }
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <InformationMain />,
            },
        ],
        loader: () => {
            if (!localStorage.getItem('user')) {
                throw redirect('/')
            }
            return null
        }
    },
]);
