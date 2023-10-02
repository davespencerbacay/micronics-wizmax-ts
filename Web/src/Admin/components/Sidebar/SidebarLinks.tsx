import ADMIN_ROUTES from "constants/adminRoutes";
import { FaUsers, FaClipboardList, FaQuestion } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

export type sideBarType = {
	icon: JSX.Element;
	name: string;
	linkTo?: any;
};

const SidebarLinks: sideBarType[] = [
	{
		icon: <RxDashboard />,
		name: "Dashboard",
		linkTo: ADMIN_ROUTES.DASHBOARD,
	},
	{
		icon: <FaUsers />,
		name: "Users",
		linkTo: ADMIN_ROUTES.USERS,
	},
	{
		icon: <FaClipboardList />,
		name: "Products",
		linkTo: ADMIN_ROUTES.PRODUCTS,
	},
	{
		icon: <FaQuestion />,
		name: "FAQs",
		linkTo: ADMIN_ROUTES.FAQs,
	},
];

export default SidebarLinks;
