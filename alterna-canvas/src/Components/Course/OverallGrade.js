import React, {useEffect, useState}  from "react";
import annaData from "../student-data/anna-chambers.json"
import keerthiData from "../student-data/keerthi-sekar.json"
import tomData from "../student-data/tom-meyers.json"

function OverallGrade(props) {
    var grades = [];
    const [totalGrade, setTotalGrade] = useState(0)
    const [letterGrade, setLetterGrade] = useState("A")

    if(props.class === "User Interface") {
        grades = props.student === "Anna" ? annaData.course[2].assignments : props.student === "Keerthi" ? keerthiData.course[2].assignments : tomData.course[2].assignments;
    }
    else if(props.class === "Computer Graphics") {
        grades = props.student === "Anna" ? annaData.course[0].assignments : props.student === "Keerthi" ? keerthiData.course[0].assignments : tomData.course[0].assignments;
    }
    else {
        grades = props.student === "Anna" ? annaData.course[1].assignments : props.student === "Keerthi" ? keerthiData.course[1].assignments : tomData.course[1].assignments;
    }

    useEffect(() => {
        var total = 0;
        var count = 0;
        grades.map(item => {
            if(item.status !== "incomplete") {
                total += Number(item.finalgrade);
                count++;
            }
        })
        var stringTotal = (total/count).toString();
        setTotalGrade(Number(stringTotal.slice(0, 4)));
        setLetterGrade(totalGrade >= 94 ? "A" : totalGrade >= 90 ? "A-" : totalGrade >= 87 ? "B+" : totalGrade >= 83 ? "B" : totalGrade >= 80 ? "B-" : totalGrade >= 77 ? "C+" : totalGrade >= 73 ? "C" : "C-");

    }, [totalGrade, letterGrade, grades])

    return(
        <h2>Overall Grade: {totalGrade}% ({letterGrade})</h2>
        
    );

}

export default OverallGrade;