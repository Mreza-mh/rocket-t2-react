import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../Store/Slices/SidebarSlice";
import Sidebarap from "./Sidebarap";
import { Transition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

const duration = 400;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  position: "absolute", top: 0, left: 0,
  width: "700px", opacity: 0, transform: "translateX(-100%)",
};

const transitionStyles = {
  entering: { opacity: 0.8, transform: "translateX(0)" },   entered: { opacity: 1, transform: "translateX(0)" },
  exiting: { opacity: 0, transform: "translateX(-100%)" },  exited: { opacity: 0, transform: "translateX(-100%)" },
};

function SideBar() {
  
  const nodeRef = useRef(null);
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebar = useSelector((state) => state.sidebar.sidestate);

    useEffect(() => {
      const isAuthenticated = () => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        return (
          userData?.expirationTime &&
          new Date().getTime() < userData.expirationTime
        );
      };

      setSidebarOpen(isAuthenticated());
    }, []);
  
    const navigate = useNavigate();

      const handleLogout = () => {
        localStorage.removeItem("userData");
        console.log(localStorage.getItem("userData"));
        navigate("/");
      };

  return (
    <>
      {sidebarOpen && (
        <nav className=" bg-gradient-to-r h-20 from-[#a02a499b] via-[#a02a4938] to-[#1a304446] p-2 flex items-center w-full justify-between  z-50 ">
          <h1 className=" ml-40 text-center text-white text-bold ">
            MANAGE PAGE
          </h1>
        </nav>
      )}
      {sidebarOpen && (
        <nav className="bg-gradient-to-r from-[#a02a49f6] via-[#a02a499b]  p-2 flex items-center justify-between fixed top-0 z-50 w-1/12">
          <div>
            <button
              className="text-white text-xl ml-6 mt-2 font-semibold text-center"
              onClick={() => dispatch(toggleSidebar())}
            >
              {!sidebar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                >
                  {" "}
                  <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />{" "}
                  <path d="M0-.75h48v48h-48z" fill="none" />
                </svg>
              ) : (
                <svg
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z" />{" "}
                  <path d="M0 0h48v48h-48z" fill="none" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-user-circle text-white text-2xl"></i>
          </div>
          <Transition nodeRef={nodeRef} in={sidebar} timeout={duration}>
            {(state) => (
              <div
                ref={nodeRef}
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                  marginTop: sidebar ? "320px" : "0",
                }}
              >
                {sidebar && (
                  <Sidebarap
                    setSidebarOpen={setSidebarOpen}
                    handleLogout={handleLogout}
                  />
                )}
              </div>
            )}
          </Transition>
        </nav>
      )}
    </>
  );
}

export default SideBar;
