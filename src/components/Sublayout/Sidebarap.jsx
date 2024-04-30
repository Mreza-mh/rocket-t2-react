import { Link, useLocation , useNavigate } from "react-router-dom";
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
      <aside className=" z-20 flex-shrink-0 flex-grow-0 justify-around gap-4 border-t border-gray-200 bg-white p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border transition-all duration-300 ease-in-out">
        <Link
          to="/welcome"
          className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5  ${
            isActive("/welcome")
              ? "text-fuchsia-800 text-bold"
              : "text-gray-400"
          } hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800`}
        >
          {isActive("/welcome") && (
            <span className=" mr-14 h-1 w-1">
              <span className="relative animate-ping inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 shrink-0"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />{" "}
          </svg>{" "}
          <small className="text-xs font-medium"> Analytics </small>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 shrink-0"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />{" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />{" "}
          </svg>
          <small className="text-center text-xs font-medium"> Manage </small>
        </Link>
        <hr className=" dark:border-gray-900/60" />
        <hr className=" dark:border-gray-500/60" />

        <button
          onClick={click}
          className={`flex aspect-square min-h-[32px] w-16 flex-col 
           items-center justify-center gap-1 rounded-md p-1.5 text-gray-400  hover:bg-red-300 hover:text-gray-900  dark:text-gray-400 dark:hover:bg-slate-800`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>

          <small className="text-center text-xs font-medium">Log out</small>
        </button>
      </aside>
    </div>
  );
}

export default Sidebarap;
