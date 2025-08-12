import App from "@/App";
import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { createBrowserRouter } from "react-router"


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, Component: App },  
        ]
    },
    
])

export default routes;