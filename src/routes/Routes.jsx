import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/RootLayout";
import ErrorPg from "../pages/ErrorPg";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPg />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
