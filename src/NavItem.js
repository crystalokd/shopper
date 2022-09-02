import React from 'react';


const NavItem = ({ onTabChange, itemClass }) => (
    <ul>
        <li className={itemClass('items')}>
            <button onClick={() => onTabChange('items')}>
                Items
            </button>
        </li>
        <li className={itemClass('cart')}>
            <button onClick={() => onTabChange('cart')}>
                Cart
            </button>
        </li>
    </ul>

)

export default NavItem;
