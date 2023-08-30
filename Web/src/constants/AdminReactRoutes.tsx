import Dashboard from "Admin/pages/Dashboard/Dashboard";
import { ROUTE_PATH } from "./routes";
import Portal from "Admin/Portal";
import GuardWrapper from "Admin/layout/GuardWrapper/GuardWrapper";

const ADMIN_REACT_ROUTES = [
  {
    PATH: ROUTE_PATH.ADMIN,
    ELEMENT: <Portal />,
  },
  {
    PATH: ROUTE_PATH.DASHBOARD,
    ELEMENT: (
      <GuardWrapper>
        <Dashboard />
      </GuardWrapper>
    ),
  },
];

export default ADMIN_REACT_ROUTES;
