import React, {useState}  from "react";
import ActivePlan from "./ActivePlan";

function Plan() {
    const [activePlans, setActivePlans] = useState([]);
    const [title, setTitle] = useState("");
    const [task1, setTask1] = useState("");
    const [task2, setTask2] = useState("");
    const [task3, setTask3] = useState("");
    const [task1Due, setTask1Due] = useState("");
    const [task2Due, setTask2Due] = useState("");
    const [task3Due, setTask3Due] = useState("");

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }
    function handleTask1Change(e) {
        setTask1(e.target.value)
    }
    function handleTask2Change(e) {
        setTask2(e.target.value)
    }
    function handleTask3Change(e) {
        setTask3(e.target.value)
    }
    function handleTask1Due(e) {
        setTask1Due(e.target.value)
    }
    function handleTask2Due(e) {
        setTask2Due(e.target.value)
    }
    function handleTask3Due(e) {
        setTask3Due(e.target.value)
    }

    function handleSave() {
        setActivePlans([...activePlans, {
            title: title,
            task1: task1,
            task2: task2,
            task3: task3,
            task1Due: task1Due,
            task2Due: task2Due,
            task3Due: task3Due
        }])
        setTitle("");
        setTask1("");
        setTask2("");
        setTask3("");
        setTask1Due("");
        setTask2Due("");
        setTask3Due("");
    }

    return(
        <div className="course-inner">
            {activePlans.map((value, index) => (
                <ActivePlan title={value.title} task1={value.task1} task2={value.task2} task3={value.task3} task1Due={value.task1Due} task2Due={value.task2Due} task3Due={value.task3Due}/>
            ))}
            <div className="plan">
                <div>
                    <label style={{marginRight: "5px"}}><strong>Title: </strong></label>
                    <input style={{width: "300px"}} type="text" onChange={(handleTitleChange)} value={title}></input>
                </div>
                <label><strong>List of Tasks:</strong></label>
                    <ul>
                        <li>
                            <div style={{display: "flex", flexDirection: "row", margin: "5px", justifyContent: "space-between"}}>
                                <input type="text" style={{margin: "5px", width: "300px"}} onChange={handleTask1Change} value={task1}></input>
                                <label></label>
                                <label></label>
                                <input type="date"/>
                                <div style={{margin: "5px"}}>to</div>
                                <input type="date" onChange={handleTask1Due} value={task1Due}/>
                            </div>
                        </li>
                        <li>
                            <div style={{display: "flex", flexDirection: "row", margin: "5px", justifyContent: "space-between"}}>
                                <input type="text" style={{margin: "5px", width: "300px"}} onChange={handleTask2Change} value={task2}></input>
                                <label></label>
                                <label></label>
                                <input type="date"/>
                                <div style={{margin: "5px"}}>to</div>
                                <input type="date" onChange={handleTask2Due} value={task2Due}/>
                            </div>
                        </li>
                        <li>
                            <div style={{display: "flex", flexDirection: "row", margin: "5px", justifyContent: "space-between"}}>
                                <input type="text" style={{margin: "5px", width: "300px"}} onChange={handleTask3Change} value={task3}></input>
                                <label></label>
                                <label></label>
                                <input type="date"/>
                                <div style={{margin: "5px"}}>to</div>
                                <input type="date" onChange={handleTask3Due} value={task3Due}/>
                            </div>
                        </li>
                    </ul>
                    <button className="btn btn-primary" style={{float: "right"}} onClick={handleSave}>Save</button>
            </div>
        </div>
        
    );

}

export default Plan;