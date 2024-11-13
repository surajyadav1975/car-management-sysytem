import {React ,createContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const apiurl = import.meta.env.VITE_API_URL;

const MyContext=createContext();

export const Myprovider=({children})=>{
    const [cars,setcars] =useState([]);
    const [loading, setLoading] = useState(true);
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
          console.log(cars);
          setLoading(false); 
        } catch (error) {
          alert(error.message);
          setLoading(false);
        }
      };

      

      return (
        <MyContext.Provider value={{ loading, cars, handlelogout,fetchallPosts,}}>
            {children}
        </MyContext.Provider>
    );
    
}

export default MyContext;