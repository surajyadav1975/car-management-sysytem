import React, { useState } from 'react';
import { PencilSquareIcon, TrashIcon, EllipsisVerticalIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import MyContext from '../context/createContext';

const Post = ({post}) => {

  const [like,setlike]=useState(0);
  const [likeclick,setlikeclick]=useState(false);
  const {handleLike,handlefollow}=useContext(MyContext);
  const [clicked,setclicked]=useState(false);
  const handleclicklike=()=>{
    handleLike(post._id);
    if(!likeclick){
      setlike(like+1);
    }
    setlikeclick(true);
  }

  const handlefollowclick=()=>{
    handlefollow(post._id);
    setclicked(true);
  }

  return (
    <div className="w-5/12 h-5/12 mx-auto bg-white rounded-lg overflow-hidden mb-5">
      <div className="px-2 py-2">
        <div className="flex justify-between items-center">
          <div className='flex gap-4 items-center'>
          <button className={`flex items-center font-bold hover:text-orange-500 text-gray-900`}>
            <span>{post.title}</span>
          </button>
          </div>
          <div>
            <EllipsisVerticalIcon className="w-6 h-6 mr-1"/>
          </div>

        </div>
      </div>

      <div className="bg-gray-100">
        <img
          className="object-cover w-full h-full"
          src={`data:image/jpeg;base64,${ post.image}`}
          alt="Post Image"
        />
      </div>

      <div className="p-2">
        <div className="font-bold ml-2 text-1xl leading-normal tracking-tight text-gray-900 mb-1 mr-2 min-h-20">{post.content}</div>
      </div>

      <div className="px-4 py-2 border-t border-gray-200 border-t-1 border-black">
        <div className="flex justify-between items-center">
            <span className="font-bold ml-2 text-1xl leading-normal tracking-tight text-gray-900">{post.tags}</span>
            <div className='flex gap-3'>
              <div className='flex'>
              <PencilSquareIcon className="w-6 h-6 mr-1"></PencilSquareIcon>
              <span className="font-bold ml-2 text-1xl leading-normal tracking-tight text-gray-900">Edit</span>
              </div>
              <div className='flex'>
              <TrashIcon className="w-6 h-6 mr-1"></TrashIcon>
              <span className="font-bold ml-2 text-1xl leading-normal tracking-tight text-gray-900">Delete</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

