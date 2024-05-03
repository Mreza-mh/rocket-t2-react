import { Link, useLocation , useNavigate } from "react-router-dom";
import { svg } from "../../assets/SVG/Svg";
function Sidebarap({ setSidebarOpen, handleLogout }) {

    const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const click = () => {
    handleLogout();
    setSidebarOpen(false);
  };

  return (
    <div className="fixed inset-y-0 left-0 w-16 flex items-center justify-center z-50">
      <aside className="flex flex-col gap-4 border-t border-gray-200 bg-white p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-1/2 -translate-y-1/2 left-6 min-h-[auto] min-w-[64px] rounded-lg border transition-all duration-300 ease-in-out">
        <Link
          to="/welcome"
          className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
            isActive("/welcome")
              ? "bg-fuchsia-800 text-white font-bold"
              : "text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700"
          }`}
        >
          {isActive("/welcome") && (
            <span className="absolute left-0 ml-3 h-2 w-2 animate-ping rounded-full bg-sky-500"></span>
          )}
          {svg.Analytics}
          <small className="text-xs font-medium"> Dashboard </small>
        </Link>

        <Link
          to="/post"
          className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5  ${
            isActive("/post") ? "text-fuchsia-800 text-bold" : "text-gray-400"
          } hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800`}
        >
          {isActive("/post") && (
            <span className=" mr-14 h-1 w-1">
              <span className="relative animate-ping inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          )}
          {svg.manage}
          <small className="text-center text-xs font-medium"> Manage </small>
        </Link>
        <hr className=" dark:border-gray-900/60" />

        <button
          onClick={click}
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-400 hover:bg-red-300 hover:text-gray-900 dark:hover:bg-slate-700"
        >
          {svg.logout}

          <small className="text-center text-xs font-medium">Log out</small>
        </button>
      </aside>
    </div>
  );
}

export default Sidebarap;
