import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";

const Routers = () => {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
};

export default Routers;
