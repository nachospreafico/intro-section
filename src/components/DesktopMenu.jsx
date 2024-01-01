import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faBell,
  faCalendarDay,
  faClipboardList,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DesktopMenu = () => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    <nav className=" flex flex-row gap-8 justify-center items-center">
      {/* Overlay */}
      {features || company ? (
        <div
          onClick={() => {
            setFeatures(false);
            setCompany(false);
          }}
          className="fixed top-0 left-0 h-screen w-screen bg-black/[5%]"
        ></div>
      ) : null}
      <div className="relative">
        <button
          onClick={() => {
            if (company) {
              setCompany(false);
            }
            setFeatures(!features);
          }}
          className={`flex flex-row gap-2 items-center ${
            features ? "text-black" : "text-gray-500"
          }  hover:text-black duration-200`}
        >
          Features <FontAwesomeIcon icon={features ? faCaretUp : faCaretDown} />
        </button>
        {features && (
          <div className="absolute bg-white shadow-lg rounded-md p-6 flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center cursor-pointer">
              <FontAwesomeIcon
                icon={faClipboardList}
                className="text-blue-500"
              />
              <p className="text-gray-500">Todo List</p>
            </div>
            <div className=" flex flex-row gap-2 items-center cursor-pointer">
              <FontAwesomeIcon icon={faCalendarDay} className="text-cyan-500" />
              <p className="text-gray-500">Calendar</p>
            </div>
            <div className="flex flex-row gap-2 items-center cursor-pointer">
              <FontAwesomeIcon icon={faBell} className="text-yellow-400" />
              <p className="text-gray-500">Reminders</p>
            </div>
            <div className=" flex flex-row gap-2 items-center cursor-pointer">
              <FontAwesomeIcon icon={faClock} className="text-purple-500" />
              <p className="text-gray-500">Planning</p>
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <button
          onClick={() => {
            if (features) {
              setFeatures(false);
            }
            setCompany(!company);
          }}
          className={`flex flex-row gap-2 items-center ${
            company ? "text-black" : "text-gray-500"
          }  hover:text-black duration-200`}
        >
          Company <FontAwesomeIcon icon={company ? faCaretUp : faCaretDown} />
        </button>
        {company && (
          <div className="bg-white absolute w-[117px] shadow-lg rounded-md p-6 flex flex-col gap-4">
            <p className="text-gray-500 cursor-pointer">History</p>
            <p className="text-gray-500 cursor-pointer">Our Team</p>
            <p className="text-gray-500 cursor-pointer">Blog</p>
          </div>
        )}
      </div>
      <p className="text-gray-500 hover:text-black duration-200 cursor-pointer">
        Careers
      </p>
      <p className="text-gray-500 hover:text-black duration-200 cursor-pointer">
        About
      </p>
    </nav>
  );
};

export default DesktopMenu;
