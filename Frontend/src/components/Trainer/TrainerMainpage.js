import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useUser } from "../../Auth/userProvider";

const TrainerMainpage=()=>{
    const {id}=useParams();
    const {details,setdetails}=useUser();
    // console.log(details)
    // useEffect(()=>{
    //     axios.get(`https://backend-2-4g8q.onrender.com/gettrainByid/${id}`)
    //     .then((res)=>{
    //         // setdetails(res.data.details);
    //     })
    // },[])
    const startatd=()=>{
            // axios.put('https://backend-2-4g8q.onrender.com/start-attendence',details)
            // .then((res)=>{console.log(res.data)})
    }
    return(
        <div className="container d-flex justify-content mt-5 row">
        <div className="col-md-3">
        <Link to={`Displaystudent/${details.Technology}`} className="card-link">
            <div className="Studentcard ">
            <div className="pic">
                    <img src="https://backend-2-4g8q.onrender.com/images/studprofile.png" alt="Student Avatar" />
                </div>
                <div className="student-details">
                    <h2>Student List</h2>
                </div>
            </div></Link></div>
            <div className="col-md-3">
            <Link to={`Trainerpage/${details.Technology}`} className="card-link" onClick={startatd}>
            <div className="Studentcard">
            <div className="pic">
                    <img src="https://backend-2-4g8q.onrender.com/images/studprofile.png" alt="Student Avatar" />
                </div>
                <div className="student-details">
                    <h2>Take Attendance</h2>
                </div>
            </div></Link></div>
        </div>
    )
}
export default TrainerMainpage;