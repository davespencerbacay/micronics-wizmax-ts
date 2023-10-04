import Dashboard from "Admin/pages/Dashboard/Dashboard";
import { ROUTE_PATH } from "./routes";
import Portal from "Admin/Portal";
import GuardedWrapper from "Admin/layout/GuardedWrapper/GuardedWrapper";
import UserPage from "Admin/pages/Users/UserPage";
import ProductPage from "Admin/pages/Products/ProductPage";

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
        <UserPage />
      </GuardedWrapper>
    ),
  },
  {
    PATH: ROUTE_PATH.PRODUCTS,
    ELEMENT: (
      <GuardedWrapper>
        <ProductPage />
      </GuardedWrapper>
    ),
  },
];

export default ADMIN_REACT_ROUTES;
