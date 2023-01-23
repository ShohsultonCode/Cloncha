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
                users.length > 0 ? users.map((item, index)=>{
                    <div className="cardcha w-75">
                        <h4>{item.login}</h4>
                    </div>
                }):"Follower No"
            }
              </div>
            </div>
    )
}

export default index