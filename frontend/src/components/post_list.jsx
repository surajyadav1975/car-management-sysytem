import React, { useState, useContext } from 'react';
import { PencilSquareIcon, TrashIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import MyContext from '../context/createContext';

const Post = ({ post}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: post.title,
    content: post.content,
    tags: post.tags,
  });

  const {onUpdatePost,onDeletePost}=useContext(MyContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handledelete= async (e) =>{
    e.preventDefault();
    await onDeletePost(post._id);
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await onUpdatePost(post._id, editData); 
    setIsEditing(false); 
  };

  return (
    <div className="w-5/12 h-5/12 mx-auto bg-white rounded-lg overflow-hidden mb-5">
      <div className="px-2 py-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <button className="flex items-center font-bold hover:text-orange-500 text-gray-900">
              <span>{post.title}</span>
            </button>
          </div>
          <div>
            <EllipsisVerticalIcon className="w-6 h-6 mr-1" />
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <img
          className="object-cover w-full h-full"
          src={`data:image/jpeg;base64,${post.image}`}
          alt="Post Image"
        />
      </div>

      <div className="p-2">
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              name="title"
              value={editData.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="content"
              value={editData.content}
              onChange={handleInputChange}
              placeholder="Content"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="tags"
              value={editData.tags}
              onChange={handleInputChange}
              placeholder="Tags"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <button type="submit" className="mt-2 bg-blue-500 text-white rounded px-4 py-2">
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="mt-2 bg-gray-500 text-white rounded px-4 py-2"
            >
              Cancel
            </button>
          </form>
        ) : (
          <div className="font-bold ml-2 text-1xl leading-normal tracking-tight text-gray-900 mb-1 mr-2 min-h-20">
            {post.content}
          </div>
        )}
      </div>

      <div className="px-4 py-2 border-t border-gray-200 border-t-1 border-black">
        <div className="flex justify-between items-center">
          <span className="font-bold ml-2 text-1xl leading-normal tracking-tight text-gray-900">
            {post.tags}
          </span>
          <div className="flex gap-3">
            <div
              className="flex cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              <PencilSquareIcon className="w-6 h-6 mr-1" />
              <span className="font-bold ml-2 text-1xl leading-normal tracking-tight text-gray-900">Edit</span>
            </div>
            <div
              className="flex cursor-pointer"
              onClick={handledelete}
            >
              <TrashIcon className="w-6 h-6 mr-1" />
              <span className="font-bold ml-2 text-1xl leading-normal tracking-tight text-gray-900">Delete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

