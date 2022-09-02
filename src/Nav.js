import React from 'react';
import NavItem from './NavItem'

const Nav = ({ activeTab, onTabChange }) => {
    const itemClass = tabName =>
        `App-nav-item ${
            activeTab === tabName ? "selected" : ''
        }`;

    return (
    <nav className='App-nav'>
        <NavItem activeTab={activeTab} onTabChange={onTabChange} itemClass={itemClass}/>
    </nav>
);};

export default Nav;
