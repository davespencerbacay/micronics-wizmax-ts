import ADMIN_ROUTES from "constants/adminRoutes";
import React, { createContext, useContext } from "react";
import { FaRegCalendarCheck, FaTachometerAlt } from "react-icons/fa";

export interface ISidebarLinks {
  linkText: string;
  link?: string;
  isActive?: boolean;
  icon: React.ReactNode;
  isSubMenu?: boolean;
  subLinks?: {
    linkText?: string;
    link?: string;
    icon?: React.ReactNode;
    isActive?: boolean;
  }[];
}
type UserContextData = {
  loading: boolean;
  error: boolean | null;
};
export const UserContext = createContext<UserContextData>({
  error: false,
  loading: false,
});

const useSidebarLinks = () => {
  const currentPage = document.location.href.split("/")[4];
  const userContext = useContext(UserContext);
  const sidebarLinks: ISidebarLinks[] = [
    {
      linkText: "Dashboard",
      link: ADMIN_ROUTES.DASHBOARD,
      isActive: currentPage === ADMIN_ROUTES.DASHBOARD.split("/")[2],
      icon: <FaTachometerAlt />,
    },
    {
      linkText: "Profile",
      link: ADMIN_ROUTES.PROFILE,
      isActive: currentPage === ADMIN_ROUTES.PROFILE.split("/")[2],
      icon: <FaTachometerAlt />,
    },
    {
      linkText: "Calendars",
      link: ADMIN_ROUTES.CALENDARS,
      isActive: currentPage === ADMIN_ROUTES.CALENDARS.split("/")[2],
      icon: <FaRegCalendarCheck />,
      isSubMenu: true,
      subLinks: [
        {
          linkText: "Profile",
          link: ADMIN_ROUTES.PROFILE,
          isActive: currentPage === ADMIN_ROUTES.PROFILE.split("/")[2],
          icon: <FaTachometerAlt />,
        },
      ],
    },
  ];
  return sidebarLinks;
};

export default useSidebarLinks;
