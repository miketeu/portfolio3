import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/portfolio3/Home"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>


      <li className="nav-item">
        <NavLink
          to="portfolio3/ProjectGallery"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project Gallery
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="portfolio3/Project"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
        Project

        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="portfolio3/Contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="portfolio3/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
        
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
