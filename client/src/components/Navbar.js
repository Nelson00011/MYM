import { NavLink, Form, useRouteLoaderData } from 'react-router-dom';

import classes from './NavBar.module.css';

function NavBar() {
// const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/images"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
             Daily Image
            </NavLink>
          </li>
        
          {true &&
          <li>
            <NavLink
              to={`/auth`}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Login
            </NavLink>
          </li>}
         {false && <li>
          <Form action="/logout" method='post'> 
            <button>Logout</button>
            </Form>
          </li>}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
