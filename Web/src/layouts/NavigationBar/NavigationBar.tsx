import React, { useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarToggler,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from 'reactstrap'
import { IMAGES, ROUTE_PATH } from "constants/";
import { Link } from 'react-router-dom';
import intl from 'i18n/intl';
import "./NavigationBar.scss"
import useChangeLanguage from 'hooks/useChangeLanguage';
import { LOCALES } from 'i18n';

const NavigationLinks = () => {
    const navbarLinkName = [
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
    return (
        <NavItem className='navbar-item'>
            {navbarLinkName.map((link) => (
                <Link to={link.routePath}>{link.text}</Link>
            )
            )}
            <i className="fa-solid fa-magnifying-glass"></i>
        </NavItem>
    )
}

const NavigationBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const changeLanguage = useChangeLanguage();
    return (
        <React.Fragment>
            <Navbar
                className="navbar"
                fixed='top'
            >
                <NavbarBrand>
                    <Link to={ROUTE_PATH.INDEX}><img
                        alt="logo"
                        src={IMAGES.COMPANY_LOGOS.NAVBAR}
                        style={{
                            height: 30,
                            width: "13rem"
                        }}
                    /></Link>
                </NavbarBrand>
                <Nav className='navbar-nav'>
                    <NavigationLinks />
                </Nav>
                <UncontrolledDropdown>
                    <NavbarToggler onClick={toggle} />
                    <DropdownToggle className='' caret>
                        Select Language
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={() => changeLanguage(LOCALES.KOREAN)}>KR</DropdownItem>
                        <DropdownItem onClick={() => changeLanguage(LOCALES.ENGLISH)}>US</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Navbar>
        </React.Fragment>
    )
}

export default NavigationBar