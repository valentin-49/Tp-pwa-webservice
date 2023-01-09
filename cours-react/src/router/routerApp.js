import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

//view
import Calendar from "../components/Calendar/Calendar";
import LeaderBoard from "../components/LeaderBoard/leaderboard";
import Wiki from "../components/wiki/wiki";
import App from "../App";

//header/footer/navbar
import Header from "../components/header";
//import Footer from "../components/footer";
import Navbar from "../components/navbar/navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
                    <Header />
                    <App />
                </div>,
    },
    {
        path: "/calendrier",
        element:<div >
                    <Header />
                    <div className="appWrap">
                        <Calendar />
                    </div>
                </div>,
    },
    {
        path: "/classement",
        element: <div>
                    <Header />
                    <div className="appWrap">
                        <LeaderBoard />
                    </div>
                </div>,
    },
    {
        path: "/wiki",
        element: <div>
                    <Header />
                    <div className="appWrap">
                        <Wiki />
                    </div>
                </div>,
    },
    
    
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
