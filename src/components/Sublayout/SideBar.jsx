import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../context_store/Store/Slices/SidebarSlice";
import Sidebarap from "./Sidebarap";
import { Transition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context_store/context/UserContext";
import { svg } from "../../assets/SVG/Svg";


const duration = 400;
const defaultStyle = {transition: `all ${duration}ms ease-in-out`,position: "absolute", top: 0, left: 0,width: "700px", opacity: 0, transform: "translateX(-100%)",};
const transitionStyles = {entering: { opacity: 0.8, transform: "translateX(0)" },   entered: { opacity: 1, transform: "translateX(0)" },exiting: { opacity: 0, transform: "translateX(-100%)" },  exited: { opacity: 0, transform: "translateX(-100%)" },};

function SideBar() {
  
  const nodeRef = useRef(null);
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebar = useSelector((state) => state.sidebar.sidestate);
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const username = user.getName();


  
    useEffect(() => {
      const isAuthenticated = () => {
        return user.getToken() !== null;
      };
      setSidebarOpen(isAuthenticated());
    }, []);
      

      const handleLogout = () => {
        localStorage.removeItem("userData");
        console.log(localStorage.getItem("userData"));
        navigate("/");
      };
      

  return (
    <>
      {sidebarOpen && (
        // uppernav 
        <nav className=" bg-gradient-to-r h-20 from-[#a02a499b] via-[#a02a4938] to-[#1a304446] p-2 flex items-center w-full justify-between  z-50 ">
          <div className="flex ">
            {svg.topsvg}
            <h1 className="ml-4 font-bold font-mono text-2xl text-white">Hi</h1>
            <h2 className=" ml-2 border-b-2 border-[#a02a499b] text-center text-white text-md text-bold ">
              {username}
            </h2>
          </div>
        </nav>
      )}
      {sidebarOpen && (
        // leftnav
        <nav className="bg-gradient-to-r from-[#a02a49f6] via-[#a02a499b]  p-2 flex items-center justify-between fixed top-0 z-50 w-1/12">
          <div>
            <button
              className="text-white text-xl ml-6 mt-2 font-semibold text-center"
              onClick={() => dispatch(toggleSidebar())}
            >
              
              {!sidebar ? (<>{svg.showdown}</>) : (<>{svg.showup}</>)}
              
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
