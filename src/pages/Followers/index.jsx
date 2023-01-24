import React, {useEffect, useState} from "react";
import axios from "axios";
import './index.css'
import Profile from '../../components/Profile'
const index = ()=>{
    const [users, setUsers] = useState([])

    const resDatas = async()=>{
       const res =  await axios.get("https://api.github.com/users/ShohsultonCode/followers")     
       setUsers(res.data)
    }

    useEffect(()=>{
        resDatas()
    }, [])

    return(
        <div className="wrapper">
            <div className="birinchi">
                <Profile/>
            </div>
        <div className="ikkinchi">
            {
                users.length>0 ? users.map((item, index)=>{
                    return(
                        <div className="cardcha ">
                        <div className="forimg">
                            <img src={item.avatar_url} alt="Avatar"/>
                        </div>

                        <div className="infolar d-flex justify-content-between align-items-center w-100 mx-2">
                            <h5>{item.login}</h5>
                            <button className="unflow">Unfollow</button>
                        </div>
                    </div>
                    )                    
                }):"Followers no"
            }
              </div>
            </div>
    )
}

export default index