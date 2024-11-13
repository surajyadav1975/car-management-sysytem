import React from 'react'
import { useState ,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'

const apiurl = import.meta.env.VITE_API_URL;

function protectedroute({children}) {
    const [auth,setauth]=useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
          try {
            const response = await fetch(`${apiurl}/users/check_auth`, {
              method: 'GET',
              credentials: 'include',
            });
            // response =await response.json();
            // console.log(response);
            if (response.ok) {

              setauth(true);
            } else {
                alert('you havent logged in');
              setauth(false);
              navigate('/');
            }
          } catch (error) {
            setauth(false);
          }
        };
    
        checkAuthentication();
      }, [navigate]);

      if (auth === false) {
        return null;
      }

      return children;
}

export default protectedroute