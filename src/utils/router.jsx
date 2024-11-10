import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Index from "../pages/Home";
import Services from "../pages/Services/Services";
import Career from "../pages/Career/Career";
// import Home from "../pages/Home";
// import IndexLogin from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        // loader: locationMapLoader,
      },
      {
        path: "login",
        children: [
          {
            index: true,
            // element: <IndexLogin />,
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
    ],
  },
]);
