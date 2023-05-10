import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { LoginPage } from "../../pages/Login/Login"
import { InformationMain } from "../../pages/Information/Information";

import {
    createBrowserRouter, redirect
} from "react-router-dom";
import { LandingPage } from "../../pages/Landing/LandingPage";

export const Router = createBrowserRouter([
    {
        path: "/login",
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
    }, {
        path: "/",
        element: <LandingPage />,
    }
]);
