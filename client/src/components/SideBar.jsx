import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";

function SideBar() {
  const url = useLocation();

  const { role, user } = useSelector((state) => state);
  console.log(role);

  const [activeLink, setActiveLink] = useState("setting");
  return (
    <div>
      <h1 className="text-lightText2 text-2xl font-bold">
        <span className="text-brightBlue">C</span>lassRoom
      </h1>

      {/* Link Component */}
      <div className="text-lightText mt-10 flex flex-col gap-2">
        <Link onClick={() => setActiveLink("dashboard")} to="/">
          <p
            className={`flex gap-2 items-center font-semibold hover:text-white ${
              activeLink == "dashboard" && "bg-brightBlue text-white"
            } py-1 px-2 rounded-md `}
          >
            <MdDashboard />
            Dashboard
          </p>
        </Link>
        <Link
          onClick={() => setActiveLink("teachers")}
          to="/teachers"
          className={`${role != "Principal" && "hidden"}`}
        >
          <p
            className={`flex gap-2 items-center font-semibold hover:text-white ${
              activeLink == "teachers" && "bg-brightBlue text-white"
            } py-1 px-2 rounded-md `}
          >
            <FaBookAtlas />
            Teachers
          </p>
        </Link>
        <Link
          onClick={() => setActiveLink("examdate")}
          to="/students"
          className={`${role != "Principal" && role != "Teacher" && "hidden"}`}
        >
          <p
            className={`flex gap-2 items-center font-semibold hover:text-white ${
              activeLink == "examdate" && "bg-brightBlue text-white"
            } py-1 px-2 rounded-md `}
          >
            <MdDashboard />
            Students
          </p>
        </Link>
        <Link onClick={() => setActiveLink("setting")} to="/setting">
          <p
            className={`flex gap-2 items-center font-semibold hover:text-white ${
              activeLink == "setting" && "bg-brightBlue text-white"
            } py-1 px-2 rounded-md `}
          >
            <IoIosSettings />
            Setting
          </p>
        </Link>

        {/* login */}
        <div className="absolute bottom-5">
          {!role ? (
            <Link onClick={() => setActiveLink("login")} to="/login">
              <p
                className={`flex gap-2 items-center font-semibold hover:text-white ${
                  activeLink == "login" && "bg-brightBlue text-white"
                } py-1 px-2 rounded-md `}
              >
                <IoIosSettings />
                Log In
              </p>
            </Link>
          ) : (
            <h1 className="flex items-center gap-2">
              <FaRegUser />
              {user.name}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
