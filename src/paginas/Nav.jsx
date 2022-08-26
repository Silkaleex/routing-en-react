import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "activar" : null)}
        to="/"
      >
        Pagina1
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activar" : null)}
        to="/pagina2"
      >
        pagina2
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activar" : null)}
        to="/pagina3"
      >
        Pagina3
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activar" : null)}
        to="/pagina4/G"
      >
        Pagina4
      </NavLink>
    </nav>
  );
}
