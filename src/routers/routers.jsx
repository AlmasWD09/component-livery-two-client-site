import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import NavbarPage from "../pages/navbarPage/NavbarPage";
import FooterPage from "../pages/footerPage/FooterPage";
import GallaryPage from "../pages/gallaryPage/GallaryPage";
import ReviewPage from "../pages/reviewPage/ReviewPage";
import ParallaxPage from "../pages/parallaxPage/ParallaxPage";
import SliderPage from "../pages/sliderPage/SliderPage";
import UtlityPage from "../pages/utlityPage/UtlityPage";

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
                path: "/slider",
                element: <SliderPage />,
            },
            {
                path: "/parallax",
                element: <ParallaxPage />,
            },
            {
                path: "/utlity",
                element: <UtlityPage />,
            },
            {
                path: "/footer",
                element: <FooterPage />,
            },
        ],
    },
]);

export default router;