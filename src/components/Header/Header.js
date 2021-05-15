import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <Icons>
          <Icon id="shopping-bag" size={24} />
          <Icon id="search" size={24}/>
          <Icon id="menu" size={24}/>
        </Icons>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: baseline;
  margin: 0 2rem;

  @media (min-width: ${BREAKPOINTS.tablet.px}px) {
    display: none;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media (max-width: ${BREAKPOINTS.tablet.px}px) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
