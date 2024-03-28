import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to={"/contacts"}
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact/create"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Create Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
    </div>
  );
}

export default NavBar;
