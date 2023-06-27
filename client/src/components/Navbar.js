import { NavLink } from 'react-router-dom';

import { Button } from "@mui/material";


import classes from './NavBar.module.css';

function NavBar({ handleSignOut, token }) {

 

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
        {!token && 
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Welcome Home
            </NavLink>
          </li>}
          {token && <li>
          <NavLink
              to="/images"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
             Daily Image
            </NavLink>
          </li>}
         {token && <li>
          <NavLink to="/" onClick={(event) => {
            handleSignOut(event)}}
              >
                Sign Out
              </NavLink>
          </li>}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
