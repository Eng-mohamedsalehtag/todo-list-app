import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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

      <button
        onClick={handleLogout}
        className="flex flex-col items-center gap-1 text-xs text-gray-400 hover:text-red-400 transition-colors"
      >
        <i className="fa-solid fa-right-from-bracket text-xl"></i>
        <span>Logout</span>
      </button>
    </nav>
  );
}
