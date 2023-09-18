import React, { useState } from "react";
import MeatballMenu from "/menu-meatball.svg";

function MeatBallMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='MeatballMenu' onClick={()=>setIsOpen((state: boolean) => !state)}>
      <img src={MeatballMenu} alt='meat-ball-menu' />
      {isOpen && (
        <ul className='DropdownMenu'>
          <li className='DropdownMenuItem'>Edit...</li>
          <li className='DropdownMenuItem'>Delete</li>
        </ul>
      )}
    </div>
  );
}

export default MeatBallMenu;
