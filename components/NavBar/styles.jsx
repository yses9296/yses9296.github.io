import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const HeaderNav = styled.div`
    width: 100%;
    height: 12vh;
    position: sticky;
    z-index: 99;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px 10px;
`
export const HeaderLogo = styled(Link)`
    width: 70px; 
    height: 70px;
    background-image: url(../assets/favicon.png);
    background-size: cover;
`;
export const HeaderMenu = styled.ul`
    width: 60%;
    display: flex;
`
export const HeaderMenuList = styled.li`
    width: 25%;
`
export const HeaderMenuItem = styled(Link)`
    padding: 10px 40px;
    border-radius: 5px;
    font-size: 1.1rem;
    text-transform: uppercase;
`