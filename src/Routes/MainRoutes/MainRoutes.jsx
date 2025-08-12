import App from "@/App";
import MainLayout from "@/Layouts/MainLayout/MainLayout";
import AboutMe from "@/Pages/AboutMe/AboutMe";
import Contact from "@/Pages/Contacts/Contact";
import ProjectDetailCard from "@/Pages/ProjectDetailsCard/ProjectDetailsCard";
import AllProjects from "@/Pages/Projects/AllProjects";
import { createBrowserRouter } from "react-router"


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, Component: App },  
            { path: 'about', Component: AboutMe },  
            { path: 'contact', Component: Contact },  
            { path: 'projects', Component: AllProjects },  
            { path: 'project/:projectId', Component: ProjectDetailCard },  
        ]
    },
    
])

export default routes;