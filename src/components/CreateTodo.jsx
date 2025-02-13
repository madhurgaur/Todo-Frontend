import { useState } from "react";

export function CreateTodo(){

    const[title,seTitle]=useState("");
    const [desc,setDesc]=useState("");

    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            seTitle(e.target.value);

        }} ></input>  <br/>
        <input type="text" placeholder="description" onChange={function(e){
            setDesc(e.target.value);
        }}></input>  <br/>

        <button onClick={()=>
            fetch("https://todo-backend-redt.onrender.com/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:desc
                }),
                headers:{
                    "content-Type": "application/json"
                }
            })
            .then(async function(res){
                const json=await res.json();
                console.log(json);
            alert("Todo added")
            })
        }> Add a Todo</button>
    </div>
}