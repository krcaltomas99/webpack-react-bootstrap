import React, {useState} from 'react';
import {
	Collapse,
	Navbar as ReactNavbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from 'reactstrap';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<ReactNavbar color="light" light expand="md">
			<NavbarBrand href="/">Demo</NavbarBrand>
			<NavbarToggler onClick={toggle}/>
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<NavLink disabled={true} href="/components">Components</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/topics">Topics</NavLink>
					</NavItem>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Options
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>
								Option 1
							</DropdownItem>
							<DropdownItem>
								Option 2
							</DropdownItem>
							<DropdownItem divider/>
							<DropdownItem>
								Reset
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
				<NavbarText>Simple Text</NavbarText>
			</Collapse>
		</ReactNavbar>
	);
}

export default Navbar;
