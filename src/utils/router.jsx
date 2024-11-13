import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Contact from "../pages/Contact";
import AboutUs from "../pages/About Us";
import Services from "../pages/Services/Services";
import Career from "../pages/Career/Career";
import NotFound from "../pages/NotFound";
import { lazy, Suspense } from "react";
import Laoding from "../components/Laoding page/Laoding";
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
          <Suspense fallback={<Laoding />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
        // loader: loginLoader,
      },
      {
        path: "about",
        element: <AboutUs />,
        // loader: loginLoader,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "career",
        element: <Career />,
      },
    ],
  },
]);
