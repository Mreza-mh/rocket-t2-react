import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../Rishe/Store/Slices/SidebarSlice";
import Sidebarap from "./Sidebarap";
import { Transition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Rishe/context/UserContext";

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
    return user.getToken() !== null;
  };

  setSidebarOpen(isAuthenticated());
}, []);
    const navigate = useNavigate();

      const handleLogout = () => {
        localStorage.removeItem("userData");
        console.log(localStorage.getItem("userData"));

        navigate("/");
      };
      
      const user = useContext(UserContext);
      const username = user.getName();


  return (
    <>
      {sidebarOpen && (
        <nav className=" bg-gradient-to-r h-20 from-[#a02a499b] via-[#a02a4938] to-[#1a304446] p-2 flex items-center w-full justify-between  z-50 ">
          <div className="flex ">
            <svg
              className="ml-40 w-8 h-8 text-white mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm3.953 14.845c-.313-.77-.768-1.402-1.359-1.9-1.58-.77-3.517-.77-5.098 0-.591.275-1.046 1.044-1.36 1.901C3.238 14.45 2 12.608 2 10c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4 0 2.609-1.238 4.45-2.047 4.845z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className=" ml-4 border-b-2 border-[#a02a499b] text-center text-white text-md text-bold ">
              {username}
            </h1>
          </div>
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
