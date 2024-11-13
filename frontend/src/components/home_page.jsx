import React from 'react'
import Header from './header'
import Sidebar from './sidebar';
import Post from './post_list';
import { useContext ,useEffect} from "react";
import { ArrowPathIcon} from '@heroicons/react/24/outline';
import MyContext from "../context/createContext";

function home_page() {

  const {loading, cars, fetchallPosts}=useContext(MyContext);


  useEffect(() => {
    fetchallPosts();
    // console.log(cars);
  }, []);

  return (
    <div 
        className="h-screen w-screen bg-gray-100"
      >
        <div className="w-[calc(100vw-1rem)] top-0 left-0">
          <Header />
        </div>

        <div className="flex absolute w-full px-3 top-28 left-0">
          <div className="w-3/12 h-[calc(100vh-7rem)] sidebar">
            <Sidebar />
          </div>

          <div className="mx-auto rounded-lg">
            {loading ? (
              <p className="animate-spin  mt-60">
                <ArrowPathIcon className="w-6 h-6"/>
              </p>
            ) : cars.length > 0 ? (
              <div className="postslist max-h-[80vh] overflow-y-auto rounded-lg [&::-webkit-scrollbar]:w-0"
              >
                {cars.map((item) => (
                  <Post key={item._id} post={item}/>
                ))}
              </div>
            ) : (
              <p className="text-center font-bold text-3xl italic text-purple-400 animate-bounce tracking-tight pb-2 mt-40">
                No Cars to display
              </p>
            )}
          </div>
        </div>
      </div>
  )
}

export default home_page