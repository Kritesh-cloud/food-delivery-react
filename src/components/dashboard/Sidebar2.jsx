import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { sideBarData } from "../../constant/index";
import { useNavigate } from "react-router";

const LogoutConfirmation = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    navigate("/");
    // onLogout(); // Perform logout action
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center p-3 rounded-lg transition-all duration-300 group-hover:bg-gray-700"
      >
        Logout
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-slate-800">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all text-slate-800"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Sidebar2 = ({ role }) => {
  const [sidebarItems, setSidebarItems] = useState(sideBarData);

  const toggleOpen = (index) => {
    const updatedItems = sidebarItems.map((item, i) => {
      if (i === index) {
        return { ...item, open: !item.open };
      }
      return item;
    });
    setSidebarItems(updatedItems);
  };

  const [userRoles, setUserRoles] = useState([]);

  const decodeToken = (token) => {
    if (typeof token !== "string") {
      return null;
    }
    try {
      // Split the token into parts
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      const roless = JSON.parse(jsonPayload).roles;
      setUserRoles(roless);
    } catch (error) {
      console.error("Invalid Token", error);
    }
  };

  const setToken = () => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      const bearerToken = `Bearer ${JSON.parse(loginToken)}`;
      decodeToken(bearerToken);
    }
  };

  useEffect(() => {
    setToken();
  }, []);

  useEffect(() => {
    console.log("userRoles", userRoles);
    console.log("iten", sidebarItems[0].for);
  }, [userRoles]);

  return (
    <div className="h-screen w-64 bg-gray-900 text-white shadow-lg">
      <div className="p-5 text-lg font-bold border-b border-gray-700">
        Dashboard
      </div>
      <ul className="space-y-2 p-3">
        {sidebarItems.map(
          (item, index) =>
            userRoles.some((role) => item.for.includes(role)) && (
              <li key={index} className="group">
                {item.subList.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleOpen(index)}
                      className="flex items-center w-full p-3 rounded-lg transition-all duration-300 group-hover:bg-gray-700"
                    >
                      <span className="group-hover:text-blue-400 transition-all duration-300">
                        {item.title}
                      </span>
                      <span className="ml-auto">{item.open ? "▼" : "▶"}</span>
                    </button>
                    {item.open && (
                      <ul className="ml-5 space-y-1">
                        {item.subList.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={subItem.link}
                              className={({ isActive }) =>
                                `block p-2 rounded-lg hover:bg-gray-700 transition-all duration-300 ${
                                  isActive ? "bg-gray-700" : ""
                                }`
                              }
                            >
                              {subItem.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg transition-all duration-300 group-hover:bg-gray-700 ${
                        isActive ? "bg-gray-700" : ""
                      }`
                    }
                  >
                    <span className="group-hover:text-blue-400 transition-all duration-300">
                      {item.title}
                    </span>
                  </NavLink>
                )}
              </li>
            )
        )}
        <li>
          <LogoutConfirmation />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar2;
