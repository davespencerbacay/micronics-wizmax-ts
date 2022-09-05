import { ROUTE_PATH } from "constants/constants";
import intl from "i18n/intl";

export const navbarLinks = [
    {
        routePath: ROUTE_PATH.INDEX,
        text: intl("navigationBar.home")
    },
    {
        routePath: ROUTE_PATH.PRODUCT,
        text: intl("navigationBar.products")
    },
    {
        routePath: ROUTE_PATH.SUPPORT,
        text: intl("navigationBar.support")
    },
    {
        routePath: ROUTE_PATH.SHOP,
        text: intl("navigationBar.shop")
    },
    {
        routePath: ROUTE_PATH.CONTACT,
        text: intl("navigationBar.contact")
    },
]