import React, {useState} from "react";

function MyDemo(){
    const [name,setName] = useState("enter name above")
    const [answer,setAnswer] = useState("");
    const handleNameInput = () => {
        setName(document.getElementById("MyName").value)
    }
    return(
        <div>
            <input id="MyName"></input>
            <button onClick={handleNameInput}>
                 Submit Name</button>
            <p>NAME: {name}</p>
            <p> ANSWER: {answer}</p>
            <label><input name="rb" type="radio" value="yes" checked = {answer == "yes"}
            onChange={(e) => setAnswer(e.target.value)}/>Yeeeeah</label>
            <label><input name="rb" type="radio" value="no" checked = {answer == "no"}
             onChange={(e) => setAnswer(e.target.value)}/>Nahhhhhh</label>
        </div>
    );
}
export default MyDemo