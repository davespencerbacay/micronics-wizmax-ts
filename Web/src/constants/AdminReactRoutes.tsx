import Dashboard from "Admin/pages/Dashboard/Dashboard";
import { ROUTE_PATH } from "./routes";
import Portal from "Admin/Portal";
import GuardedWrapper from "Admin/layout/GuardedWrapper/GuardedWrapper";
import Users from "Admin/pages/Users/Users";

const ADMIN_REACT_ROUTES = [
  {
    PATH: ROUTE_PATH.ADMIN,
    ELEMENT: <Portal />,
  },
  {
    PATH: ROUTE_PATH.DASHBOARD,
    ELEMENT: (
      <GuardedWrapper>
        <Dashboard />
      </GuardedWrapper>
    ),
  },
  {
    PATH: ROUTE_PATH.USERS,
    ELEMENT: (
      <GuardedWrapper>
        <Users />
      </GuardedWrapper>
    ),
  },
];

export default ADMIN_REACT_ROUTES;
