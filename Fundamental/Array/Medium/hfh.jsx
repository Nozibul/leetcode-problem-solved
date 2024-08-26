import { useState } from "react";
import { FaHome, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineProject, AiOutlinePhone, AiOutlinePicture, AiOutlineCalendar, AiOutlineDownload, AiOutlineQuestionCircle } from "react-icons/ai";
import MinistryRelated from "./MinistryRelated";
import SubOrganizations from "./SubOrganizations";
import Projects from "./Projects";
import Contact from "./Contact";
import Meetings from "./Meetings";
import Downloads from "./Downloads";
import Helplines from "./Helplines";
import Gallery from "./Gallery";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0); // Track the current tab index for mobile view
  const tabs = [
    { id: 1, label: "মন্ত্রণালয় সম্পর্কিত",  },
    { id: 2, label: "অধীনস্থ সংস্থাসমূহ",  },
    { id: 3, label: "প্রকল্প", icon: <AiOutlineProject /> },
    { id: 4, label: "যোগাযোগ", icon: <AiOutlinePhone /> },
    { id: 5, label: "গ্যালারী", icon: <AiOutlinePicture /> },
    { id: 6, label: "সভা সংক্রান্ত", icon: <AiOutlineCalendar /> },
    { id: 7, label: "ডাউনলোড", icon: <AiOutlineDownload /> },
    { id: 8, label: "হেল্পলাইনসমূহ", icon: <AiOutlineQuestionCircle /> }
  ];

  const handleMouseEnter = (index) => {
    setActiveTab(index);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
    setDropdownOpen(false);
  };

  const handlePrevTab = () => {
    setTabIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextTab = () => {
    setTabIndex((prevIndex) => Math.min(prevIndex + 1, tabs.length - 1));
  };

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-extrabold text-center my-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400">
        {/* Add your heading text here */}
      </h3>

      {/* Dropdown Menu for Mobile Devices */}
      <div className="relative mb-4 md:hidden">
        <button
          className="flex justify-center items-center w-full p-4 bg-gray-200 text-lg font-semibold text-gray-700 rounded-md"
          onClick={toggleDropdown}
        >
          <FaHome className="mr-2" />
          Menu
        </button>

        {dropdownOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-lg z-10">
            {tabs.slice(tabIndex, tabIndex + 5).map((tab) => (
              <button
                key={tab.id}
                className={`w-full p-4 text-left flex items-center ${
                  activeTab === tab.id ? "bg-blue-100" : ""
                }`}
                onClick={() => handleTabChange(tab.id)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
            <div className="flex justify-between p-2">
              <button
                onClick={handlePrevTab}
                disabled={tabIndex === 0}
                className="p-2 text-gray-600"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNextTab}
                disabled={tabIndex + 5 >= tabs.length}
                className="p-2 text-gray-600"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tab Menu for Larger Devices */}
      <div className="hidden md:flex mb-4 justify-center items-center">
        <p className="text-4xl px-2">
          <FaHome />
        </p>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 p-2 text-center cursor-pointer ${
              activeTab === tab.id
                ? "border-b-4 border-purple-700 bg-purple-300 rounded-md"
                : "border-b-2 border-transparent"
            }`}
            onMouseEnter={() => handleMouseEnter(tab.id)}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="text-base flex items-center justify-center">
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex-grow">
        {activeTab === 1 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <MinistryRelated />
          </div>
        )}
        {activeTab === 2 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <SubOrganizations />
          </div>
        )}
        {activeTab === 3 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <Projects />
          </div>
        )}
        {activeTab === 4 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <Contact />
          </div>
        )}
        {activeTab === 5 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <Gallery />
          </div>
        )}
        {activeTab === 6 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <Meetings />
          </div>
        )}
        {activeTab === 7 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <Downloads />
          </div>
        )}
        {activeTab === 8 && (
          <div className="p-4 rounded-lg">
            <hr className="my-2" />
            <Helplines />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
