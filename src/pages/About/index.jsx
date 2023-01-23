import React, {useEffect, useState} from 'react';
import "./style.scss";
import Profile from '../../components/Profile/index';
import axios from 'axios';
const index = () => {
   const [users, setUsers] = useState([])
   const resData = async()=>{
      const res = await axios.get('https://api.github.com/users/ShohsultonCode/repos');
      setUsers(res.data)
   }
   useEffect(()=>{
      resData()
   }, [])

   return (
      <div className='allitem'>
            <div className="first">
               <Profile/>
            </div>

            <div className="second">
               <div className="inputline mt-3">
                  <input 
                  type="text"
                  placeholder='Find a repasitories ..'
                  className='form-control w-75'
                   />   
               </div>     
               <div className="cardwrapper">
                     
               </div>          
            </div>
      </div>
   );
};

export default index;