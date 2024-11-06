import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
// import Home from "../pages/Home";
// import IndexLogin from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        // element: <Home />,
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
      }
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
