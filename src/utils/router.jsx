import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Index from "../pages/Home";
import Services from "../pages/Services/Services";
import Career from "../pages/Career/Career";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
// import Home from "../pages/Home";
// import IndexLogin from "../pages/login";

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
        children: [
          {
            index: true,
            element: <Contact />,
            // loader: loginLoader,
          },
        ],
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Career />,
      },
      //   {
      //     path: "master-plan",
      //     children: [
      //       {
      //         index: true,
      //         element: <MasterPlan />,
      //         loader: masterPlanLoader,
      //         shouldRevalidate: (args) => {
      //           return false;
      //         },
      //       },
      //       {
      //         path: "villa/:villaId",
      //         children: [
      //           {
      //             index: true,
      //             element: <Villa />,
      //             loader: villaLoader,
      //           },
      //         ],
      //       },
      //     ],
      //   },
      }
    ],
  },
]);
