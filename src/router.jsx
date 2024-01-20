import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Default from "./layouts/Default";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Contact from "./pages/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />,

        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/career",
                element: <Career />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]);

export default router