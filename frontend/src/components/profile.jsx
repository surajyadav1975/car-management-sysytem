import React from "react";
import Createpost from "./create_post";
import { useState, useEffect } from "react";
import { useContext } from "react";
import MyContext from "../context/createContext";
import { ArrowPathIcon} from '@heroicons/react/24/outline';

const ProfilePage = () => {

  return (
    <>
      <Createpost />  
    </>
  );
};

export default ProfilePage;
