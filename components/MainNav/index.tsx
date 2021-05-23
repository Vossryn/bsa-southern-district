import React, { useState } from "react";
import Link from "next/link";

import styles from "./MainNav.module.scss";

interface menuLink {
  href: string;
  text: string;
  active: boolean;
}

const MainMenu: menuLink[] = [
  {
    href: "#",
    text: "Home",
    active: true,
  },
  {
    href: "#",
    text: "Calendar",
    active: false,
  },
  {
    href: "#",
    text: "Find a Unit",
    active: false,
  },
  {
    href: "#",
    text: "Camping",
    active: false,
  },
  {
    href: "#",
    text: "Resources",
    active: false,
  },
];

export default function MainNav() {
  const [menuItems, setMenuItems] = useState(MainMenu);

  const handleClick = (e: React.SyntheticEvent, index: number) => {
    e.preventDefault();
    const newItems = menuItems.map((di, diIndex) => {
      di.active = diIndex === index;
      return di;
    });
    setMenuItems(newItems);
  };

  return (
    <nav className="bg-gradient-to-t  from-gray-800 to-blue-500">
      <ul className="flex flex-row justify-self-center w-3/5 m-auto">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="w-1/5 text-gray-200 hover:text-white text-center hover:bg-white hover:bg-opacity-10"
          >
            <Link href={item.href} passHref>
              <a className="block pl-4 pt-4 pr-4 pb-2" onClick={(e) => handleClick(e, index)}>
                {item.text}
                <div
                  className={`${item.active ? `${styles.active} ` : styles.hidden}${
                    styles.arrowUp
                  }`}
                ></div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div aria-hidden className="bg-gradient-to-t from-red-900 to-red-500 h-2"></div>
    </nav>
  );
}
