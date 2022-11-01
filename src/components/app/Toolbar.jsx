import {
HomeModernIcon,
} from "@heroicons/react/24/solid";
import {
GlobeAltIcon,
BellAlertIcon,
UserIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

const Toolbar = () => {
  const [full, setFull] = useState(false);
  return (
    <div
      className={`top-0 left-0 w-full overflow-auto bg-gray-50/25 backdrop-filter z-30 transition h-auto backdrop-blur sticky`}
    >
      <div className="flex justify-between items-center text-gray-500 py-8 px-20 ">
        <h1 className="text-xl font-bold text-gray-800 flex gap-1">
          <HomeModernIcon className="h-6" />
          Moderno</h1>

        <div className="flex gap-6 items-center">
          <ul className="flex gap-6 font-medium items-center">
            <li className="cursor-pointer">Support</li>
            <li className="flex items-center gap-1 cursor-pointer">
              <GlobeAltIcon className="h-5" />
              Language</li>
            <li className="rounded-full border-2 px-4 py-1 text-gray-800 cursor-pointer">List your property</li>
          </ul>
          <ul className="flex gap-4">
            <li><BellAlertIcon className="h-6 cursor-pointe" /></li>
            <li><UserIcon className="h-6 cursor-pointe" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
