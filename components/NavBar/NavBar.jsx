import React from 'react';
import { HeaderNav, HeaderLogo, HeaderMenu, HeaderMenuList, HeaderMenuItem } from './styles';

const NavBar = () => {
  return (
    <>
    <HeaderNav>

      <HeaderLogo to='/'></HeaderLogo>

      <HeaderMenu>
        <HeaderMenuList>
          <HeaderMenuItem to='/profile'>Profile</HeaderMenuItem>
        </HeaderMenuList>
        <HeaderMenuList>
          <HeaderMenuItem to='/skills'>Skills</HeaderMenuItem>
        </HeaderMenuList>
        <HeaderMenuList>
          <HeaderMenuItem to='/projects'>Projects</HeaderMenuItem>
          </HeaderMenuList>
        <HeaderMenuList>
          <HeaderMenuItem to='/contact'>Contact</HeaderMenuItem>
        </HeaderMenuList>
      </HeaderMenu>
    </HeaderNav>
    </>
  )
}

export default NavBar