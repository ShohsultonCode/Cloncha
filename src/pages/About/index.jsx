import React, { useEffect, useState } from 'react';
import "./style.scss";
import ProfileUser from '../../components/Profile/index';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const index = () => {

   const [total, setTotal] = useState(3);
   const [totalIndex, setTotalIndex] = useState(1);
   const firstOperator = total * totalIndex;
   const lastOperator = firstOperator - total;
   const [state, setState] = useState("")
   const [users, setUsers] = useState([])
   const [qidiruvFunc, setQidiruvFunc]= useState([])
   const [load, setLoading] = useState(true)
   const pushArray = [];
   const res = async () => {
         const res = await axios.get('https://api.github.com/users/ShohsultonCode/repos')
         setUsers(res.data)
      setQidiruvFunc(res.data)
         if (res.data) {
            setLoading(false)
         }
   }

   useEffect(() => {
         res()
   }, [])
   if (load) {
      return(
         <h2 className='load'>Loaing...</h2>
      )
   }

   const keyChangeUp = (e) => {
      const keyValue = e.target.value;
      setState(keyValue);
  
      if (keyValue.trim().length > 0) {
        const filtered = users.filter((item) =>
          item.name.toLowerCase().includes(keyValue.trim())
        );
        setUsers(filtered);
      } else {
        setUsers(qidiruvFunc);
      }
    };
  

   const sliceApi = users.slice(lastOperator, firstOperator);
   for (let i = 1; i <= Math.floor(users.length / total); i++) {
         pushArray.push(i)
   }

   const ClickedBtn = (number) => {
         setTotalIndex(number);
   };

   return (
         <div className="wrapper">
               <div className="birinchi">
                     <ProfileUser />
               </div>


               <div className="ikkinchi mt-5">
               <input 
                  type="text"
                  placeholder='Find a repasitory...'
                  className='form-control'
                  id='findres'
                  value={state}
                  onInput={(e) => keyChangeUp(e)}
                  />
                     <div className='title-line mx-2 mt-4'>
                           <h5 className='mx-2'>Popular repositories</h5>
                           <p>Customize your pins</p>
                     </div>
                     <div className="manba">
                           {
                                 users.length > 0 ? sliceApi.map((item, index) => {
                                       return (
                                             <div key={index} className="card w-100" id='ccc'>
                                                   <div id='firrar' className="first d-flex justify-content-between align-items-center mt-2"><a style={{ textDecoration: "none" }} href={item.html_url}>{item.name}</a> <button id='pub'>Public</button></div>
                                                   <div className="fordes w-100">
                                                         <p className='mx-4'>{item.description}</p>
                                                   </div>
                                                   <div className="forlan mx-5">
                                                   <p className='mx-4'>{item.language}<div className={item.language}></div></p>
                                                   </div>
                                             </div>
                                       )
                                 }) : "Not Found"
                           }
                     </div>
                     <div className="pinnedCard-btnGroup mt-3">
                           {pushArray.length && pushArray.map((item, index) => (
                                <div className="btnss">
                                  <button
                                       key={index}
                                       className="pinnedCard-btnGroup__btn btn btn-primary"
                                       type="button"
                                       onClick={() => ClickedBtn(item)}
                                 >
                                       {item}
                                 </button>
                                </div>
                           ))}
                     </div>


               </div>
         </div>

   );
};

export default index;