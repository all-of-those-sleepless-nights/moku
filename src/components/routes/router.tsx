import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/public-layout";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Collection from "../../pages/Collection";
import About from "../../pages/About";
import NotFound from "../../pages/404";
import News from "../../pages/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", Component: Home },
      { path: "/product", Component: Product },
      { path: "/collection", Component: Collection },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/news",
        Component: News,
      },
    ],
  },
  {
    path: "/",
    children: [{ path: "*", Component: NotFound }],
  },
]);
