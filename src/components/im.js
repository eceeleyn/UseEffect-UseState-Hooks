import React, { useState} from "react";

export const İm = () => {

    const[user,setuser]=useState(
        {
            name:"ece"
        }
    );

    const[input,setinput]=useState(" ")

    const change =()=>{

setuser(()=>({...user,name:input}))

/*setuser(user.name=input)
console.log(user)
*/

    }
return(
    <>
<input onChange={(e)=>{setinput(e.target.value)}}/>
<br/>
<br/>
<button onClick={change}>change</button>
<p>username: {user.name}</p>
</>
)
 
};
