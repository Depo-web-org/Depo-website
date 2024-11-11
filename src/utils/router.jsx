import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AboutUs from "../pages/About Us";
import Services from "../pages/Services/Services";
import Career from "../pages/Career/Career";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: locationMapLoader,
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
      // Uncomment this section if needed for the master-plan route
      // {
      //   path: "master-plan",
      //   children: [
      //     {
      //       index: true,
      //       element: <MasterPlan />,
      //       loader: masterPlanLoader,
      //       shouldRevalidate: (args) => {
      //         return false;
      //       },
      //     },
      //     {
      //       path: "villa/:villaId",
      //       element: <Villa />,
      //       loader: villaLoader,
      //     },
      //   ],
      // },
    ],
  },
]);
