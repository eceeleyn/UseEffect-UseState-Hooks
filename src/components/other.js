import React, { useEffect, useState } from "react";

export const Other=()=>{

const [number,setNumber] =useState(0);

useEffect( ()=>{

    console.log(`${number}. ıncı tıklama`)
} )

    return(
        <>
        <p> {number} defa tıkladınız </p>
        <button onClick={()=>{setNumber((number)=>number+1)}}>Click</button>
        </>
    )
}