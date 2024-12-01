import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import NavbarPage from "../pages/navbarPage/NavbarPage";
import FooterPage from "../pages/footerPage/FooterPage";
import GallaryPage from "../pages/gallaryPage/GallaryPage";
import ReviewPage from "../pages/reviewPage/ReviewPage";
import ParallaxPage from "../pages/parallaxPage/ParallaxPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/navbar",
                element: <NavbarPage />,
            },
            {
                path: "/gallary",
                element: <GallaryPage />,
            },
            {
                path: "/review",
                element: <ReviewPage />,
            },
            {
                path: "/parallax",
                element: <ParallaxPage />,
            },
            {
                path: "/footer",
                element: <FooterPage />,
            },
        ],
    },
]);

export default router;