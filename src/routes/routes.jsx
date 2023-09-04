import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Feed from "../pages/Feed";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            index: true,
            element: <Feed/>

      },
    ]
    },
  ]);

  
export default router;