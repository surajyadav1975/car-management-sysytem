import {React ,createContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const apiurl = import.meta.env.VITE_API_URL;

const MyContext=createContext();

export const Myprovider=({children})=>{
    const [cars,setcars] =useState([]);
    const [loading, setLoading] = useState(true);

    const navigate=useNavigate();

    const handlelogout=async ()=>{
      let response=await fetch(`${apiurl}/users/logout`,{
          method : "GET",
          credentials: 'include'
        })

        if(response.ok){
          navigate('/');
        }
        else{
          alert('some error ocurred');
        }
  }

    const fetchallPosts = async () => {
        try {
          const response = await fetch(`${apiurl}/posts/getallpost`,{
                credentials:'include',
              }
          );
          const {cars}= await response.json();
          setcars(cars); 
          // console.log(cars);
          setLoading(false); 
        } catch (error) {
          alert(error.message);
          setLoading(false);
        }
      };

      const onUpdatePost = async (postId, updatedData) => {
        try {
          const response = await fetch(`${apiurl}/posts/${postId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
            credentials:'include',
          });
          if (response.ok) {
            fetchallPosts();
          }
        } catch (error) {
          console.error('Error updating post:', error);
        }
      };
      
      const onDeletePost = async (postId) => {
        try {
          const response = await fetch(`${apiurl}/posts/delete/${postId}`, {
            method: 'DELETE',
            credentials:'include',
          });
          if (response.ok) {
            fetchallPosts();
          }
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      };

      return (
        <MyContext.Provider value={{ loading, cars, onUpdatePost,onDeletePost, handlelogout,fetchallPosts,}}>
            {children}
        </MyContext.Provider>
    );
    
}

export default MyContext;