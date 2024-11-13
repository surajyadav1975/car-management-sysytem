import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const apiurl = import.meta.env.VITE_API_URL;

const createpost = () => {
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        try{
        e.preventDefault();
        
        const file = e.target.image.files[0];
        const content = e.target.content.value;
        const title = e.target.title.value;
        const tags =e.target.tags.value;
        const formData = new FormData();
        formData.append('image', file); 
        formData.append('content', content);
        formData.append('title', title);
        formData.append('tags', tags);
        let response=await fetch(`${apiurl}/posts/create`,{
            method : "POST",
            body:formData,
            credentials: 'include',
          });
          
          if(response.ok){
            navigate('/home');
          }
        }
        catch(err){
            alert('cant create car due to some error ');
            navigate('/home');
        }
    };

  return (
    <div className="bg-white  text-1xl font-bold leading-9 tracking-tight text-gray-900 createpost rounded-3xl bg-cover bg-center p-5"
    >
      <h1 className="text-2xl font-bold underline mb-6 text-center">Add Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-1xl font-bold text-gray-700 mb-2">Image</label>
          <input id="image" name='image' type="file" accept="image/*" className="border rounded-lg pl-2 p-1 w-full bg-white " />
        </div>
        
        <div className="mb-2">
          <label className="block text-1xl font-bold text-gray-700 mb-2">Title</label>
          <input type='text' placeholder='Enter Your Title' required name='title' id='title' className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"/>
        </div>

        <div className="mb-2">
          <label className="block text-1xl font-bold text-gray-700 mb-2">Tags</label>
          <input type='text' placeholder='Enter Your Tags in a sentence' required name='tags' id='tags' className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"/>
        </div>

        <div className="mb-2">
          <label className="block text-1xl font-bold text-gray-700 mb-2">Content</label>
          <textarea
           
            id='content'
            name='content'
            className="border p-2 pl-4 w-full h-28 rounded-lg"
            placeholder="Enter some content here..."
          />
        </div>
        
        <button type="submit" className="bg-white text-gray-900 hover:scale-125 duration-500 py-2 px-4 rounded-full"
        style={{backgroundColor: 'orangered',backgroundImage: 'linear-gradient(90deg, #FF4500 0% ,#ff7f50 100%)'}}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default createpost;
