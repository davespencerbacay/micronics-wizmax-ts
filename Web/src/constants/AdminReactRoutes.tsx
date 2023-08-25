import Dashboard from "Admin/pages/Dashboard/Dashboard";
import { ROUTE_PATH } from "./routes";
import Portal from "Admin/Portal";

const ADMIN_REACT_ROUTES = [
  {
    PATH: ROUTE_PATH.ADMIN,
    ELEMENT: <Portal />,
  },
  {
    PATH: ROUTE_PATH.DASHBOARD,
    ELEMENT: <Dashboard />,
  },
];

export default ADMIN_REACT_ROUTES;
