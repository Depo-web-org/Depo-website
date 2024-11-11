import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
// import Home from "../pages/Home";
// import IndexLogin from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {path: '*', element: <NotFound/> },
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
      }
    ],
  },
]);
