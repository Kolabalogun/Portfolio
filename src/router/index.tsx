import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import ProjectDetails from "../containers/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetails />,
  },
]);

export default router;
