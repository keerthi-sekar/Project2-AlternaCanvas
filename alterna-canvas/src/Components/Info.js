import React, {useState}  from "react";

function Info(props) {
    const [courseNum, setCourseNum] = useState(props.class === "User Interface" ? "5067" : props.class === "Computer Graphics" ? "5124" : "5001")
    const [times, setTimes] = useState(props.class === "User Interface" ? "Mon, Wed, Fri 1:25pm-2:20pm" : props.class === "Computer Graphics" ? "Mon, Wed, Fri 4:30-5:20pm" : "Tuesday 12:00-3:00pm")
    const [prof, setProf] = useState(props.class === "Senior Design" ? "Dr. Professor" : "Dr. Jillian Aurisano")
    const [email, setEmail] = useState(props.class === "enior Design" ? "doctor.professor@uc.edu" : "jillian.aurisano@uc.edu")
    const [officeHrs, setOfficeHrs] = useState(props.class === "User Interface" ? "After class M and F from 2:20-3:00pm, or by appointment" : props.class === "Computer Graphics" ? "After class M and F from 5:30-6:30pm, or by appointment" : "On request.")
    return(
        <div className="course-inner" style={{display: "flex", flexDirection: "column"}}>
            <h2><strong>CS {courseNum}</strong></h2>
            <p><strong>Class times</strong>: {times},</p>
            <p><strong>Location: </strong>Baldwin 661</p>
            <p><strong>Instructor:</strong><span>&nbsp;</span>{prof}</p>
            <p><strong>Email:</strong><span>&nbsp;</span><a href="mailto:jillian.aurisano@uc.edu">{email}</a></p>
            <p><strong>Office:</strong><span>&nbsp;</span>812b Rhodes</p>
            <p><strong>Student Hours:</strong><span>&nbsp;</span>{officeHrs}</p>
        </div>
        
    );

}

export default Info;