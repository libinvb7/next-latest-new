"use client"
import { useState } from "react";
import Link from "next/link";
import menu from "../../../data/menu/menu";


const MobileMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleSubMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow block lg:hidden">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            <Link href="/">MyBrand</Link>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className=" p-2 text-gray-500 dark:text-gray-300"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <span>&#x2715;</span>
            ) : (
              <span>&#9776;</span> 
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className=" bg-white dark:bg-gray-800 shadow-lg">
          <ul className="p-4 space-y-4">
            {menu.navItems.map((menuItem, index) => (
              <li key={index}>
                {
                    menuItem.mainLink ? <Link href={menuItem.mainLink || ""}>
                    <button
                      onClick={() => toggleSubMenu(menuItem.name)}
                      className="flex justify-between items-center w-full text-left p-2 text-gray-700 dark:text-gray-200"
                    >
                      {menuItem.name}
                    </button>
                    </Link>  : 
                <button
                  onClick={() => toggleSubMenu(menuItem.name)}
                  className="flex justify-between items-center w-full text-left p-2 text-gray-700 dark:text-gray-200"
                >
                  {menuItem.name}
                  <span>{activeMenu === menuItem.name ? "-" : "+"}</span>
                </button>
                
                }
                
                {activeMenu === menuItem.name && menuItem.sections && (
                  <div className="pl-4 mt-2 space-y-2">
                    {menuItem.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300">
                          {section.title}
                        </h3>
                        <ul className="mt-2">
                          {section.navMenu.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                href={item.link || "#"}
                                className="block text-sm text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileMenu;
