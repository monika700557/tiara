import {
  House,
  Users,
  ClipboardList,
  Star,
  CreditCard,
  Package,
  ChartPie,
  LayoutGrid,
  Settings,
  UserPlus,
  File,
  User,
  MapPin,
  Pocket,
  Box,
  ChartBar,
  Award,
  Columns2,
  LayoutPanelTop,
  Dock,
  ChevronRight, UserRoundPen, Lock ,OctagonAlert ,StickyNote
} from "lucide-react";
import { useState } from "react";
import { navLinks } from "../../constants/navLinks";
import React from "react";

const AsideSidebar = () => {
  const [isReportsDropdownOpen, setIsReportsDropdownOpen] = useState(false);

  const toggleReportsDropdown = () => {
    setIsReportsDropdownOpen(!isReportsDropdownOpen);
  };

  const iconMap = {
    House,
    Users,
    ClipboardList,
    ChartPie,
    Star,
    CreditCard,
    Package,
    LayoutGrid,
    Settings,
    UserPlus,
    File,
    User,
    MapPin,
    Pocket,
    Box,
    ChartBar,
    Award,
    Columns2,
    LayoutPanelTop,
    Dock,
    ChevronRight , UserRoundPen, Lock ,OctagonAlert ,User,StickyNote
  };

  return (
    <aside className="h-screen fixed w-full">
      <nav className="flex-1 pl-6   pt-4  ml-[-20px] mt-[5rem] text-[#95979b] bg-white rounded-3xl h-full !overflow-y-scroll w-[240px]">
        <ul>
          {navLinks.map((navItem, index) => (
            <li className="mb-4" key={index}>
              <a
                href={navItem.href || "#"}
                className="hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)]  pb-[3px] flex "
                onClick={navItem.subMenu ? toggleReportsDropdown : undefined}
              >
                {navItem.icon &&
                  React.createElement(iconMap[navItem.icon], {
                    className: "mr-2",
                  })}
                {navItem.title}
              </a>

              {navItem.subMenu && isReportsDropdownOpen && (
                <ul className="pl-8 mt-2">
                  {navItem.subMenu.map((subItem, subIndex) => (
                    <li className="mb-2" key={subIndex}>
                      <a
                        href={subItem.href}
                        className="hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[5px] pb-[5px] flex font-semibold text-[15px]"
                      >
                        {subItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AsideSidebar;