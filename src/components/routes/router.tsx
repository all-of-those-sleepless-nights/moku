import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/public-layout";
import Home from "../../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ path: "/", Component: Home }],
  },
]);
