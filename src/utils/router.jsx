import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Contact from "../pages/Contact";
import AboutUs from "../pages/About Us";
import Services from "../pages/Services/Services";
import Career from "../pages/Career/Career";
import NotFound from "../pages/NotFound";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading page/Loading";
import Portfolio from "../pages/Portfolio";
const Home = lazy(() => import("../pages/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <NotFound /> },
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path:'portfolio',
        element:<Portfolio/>
      }
    ],
  },
]);
