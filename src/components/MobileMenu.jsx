import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendarDay,
  faCaretDown,
  faCaretUp,
  faClipboardList,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MobileMenu = ({ nav }) => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    <nav
      className={`fixed bg-white w-[60%] overflow-hidden duration-200 h-screen top-0 ${
        nav ? "right-0" : "right-[-100%]"
      }  px-5 py-16 flex flex-col gap-2 z-[9]`}
    >
      <a className="flex flex-col gap-2">
        <div
          className="flex flex-row gap-4 items-center"
          onClick={() => setFeatures(!features)}
        >
          <p className="text-gray-500">Features</p>{" "}
          <FontAwesomeIcon
            icon={features ? faCaretUp : faCaretDown}
            className="text-gray-500"
          />
        </div>
        <div
          className={`${
            features ? "h-full" : "h-0"
          } overflow-hidden flex flex-col gap-2`}
        >
          <div className="pl-4 flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faClipboardList} className="text-blue-500" />
            <p className="text-gray-500">Todo List</p>
          </div>
          <div className="pl-4 flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faCalendarDay} className="text-cyan-500" />
            <p className="text-gray-500">Calendar</p>
          </div>
          <div className="pl-4 flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faBell} className="text-yellow-400" />
            <p className="text-gray-500">Reminders</p>
          </div>
          <div className="pl-4 flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faClock} className="text-purple-500" />
            <p className="text-gray-500">Planning</p>
          </div>
        </div>
      </a>
      <a className="flex flex-col gap-2">
        <div
          className="flex flex-row gap-4 items-center"
          onClick={() => setCompany(!company)}
        >
          <p className="text-gray-500">Company</p>{" "}
          <FontAwesomeIcon
            icon={company ? faCaretUp : faCaretDown}
            className="text-gray-500"
          />
        </div>
        <div
          className={`${
            company ? "h-full" : "h-0"
          }  overflow-hidden flex flex-col gap-2`}
        >
          <div className="pl-4 flex flex-row gap-2 items-center">
            <p className="text-gray-500">History</p>
          </div>
          <div className="pl-4 flex flex-row gap-2 items-center">
            <p className="text-gray-500">Our Team</p>
          </div>
          <div className="pl-4 flex flex-row gap-2 items-center">
            <p className="text-gray-500">Blog</p>
          </div>
        </div>
      </a>
      <a className="text-gray-500 mb-2">Careers</a>
      <a className="text-gray-500 mb-2">About</a>
      <div className="flex flex-col gap-2 justify-center items-center">
        <button className="text-gray-500 text-sm">Login</button>
        <button className="text-gray-500 text-sm border-2 border-gray-500 rounded-md w-full py-2 max-w-[221px]">
          Register
        </button>
      </div>
    </nav>
  );
};

export default MobileMenu;
