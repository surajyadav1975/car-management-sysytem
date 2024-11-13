import React, { useState } from 'react';
import { HomeIcon, UserGroupIcon, FolderIcon, PlusCircleIcon,ArrowRightStartOnRectangleIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'; // Correct for v2
import { useContext } from 'react';
import MyContext from '../context/createContext';

const sidebar = () => {

  const {handlelogout,getfollowers,followers}=useContext(MyContext);
  
  const [flag,setflag]=useState(false);
  
  const handlefollowerclick=()=>{
    getfollowers();
    setflag(!flag);
  }
  return (
    <div className="flex flex-col gap-16 w-56 h-11/12 bg-white text-white p-4 rounded-lg">
      <nav className="flex flex-col space-y-4">
        <a href="/profile" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg myprofile hover:text-white">
          <PlusCircleIcon className="w-6 h-6 mr-3" />
          Add New Car
        </a>
        <a href="/" onClick={handlelogout} className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg myprofile hover:text-white">
          <ArrowRightStartOnRectangleIcon className="w-6 h-6 mr-3" />
          Logout
        </a>
      </nav>
      <hr className="my-4 border-gray-900" />

      <div className="flex-grow"></div>

      <a href="#" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg myprofile hover:text-white">
        <Cog8ToothIcon className="w-6 h-6 mr-3" />
        Settings
      </a>
    </div>
  );
};

export default sidebar;
