import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 text-xs transition-colors ${
      isActive ? "text-purple-600" : "text-gray-400 hover:text-purple-400"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center shadow-lg">
      <NavLink to="/" end className={linkClass}>
        <i className="fa-solid fa-house text-xl"></i>
        <span>Home</span>
      </NavLink>

      <NavLink to="/tasks" className={linkClass}>
        <i className="fa-solid fa-list-check text-xl"></i>
        <span>Tasks</span>
      </NavLink>

      <NavLink to="/profile" className={linkClass}>
        <i className="fa-solid fa-user text-xl"></i>
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}
