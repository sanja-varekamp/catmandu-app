import React from 'react';
import catLogo from './catLogo.png';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="flex py-2 px-4 bg-transparent">
      <NavLink to="/">
        <img src={catLogo} height="50px" width="60px" alt="Cat logo" />
      </NavLink>
    </div>
  );
}
