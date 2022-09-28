import React, { useState,useEffect } from "react";
import "../Styles/style.css";
const Home = () => {

  const [input, setInput] = useState(
    {
      inputValue:" "  ,
      inputValue2:" ",
    }
  );
  const [sonuc, setsonuc] = useState("");

useEffect(()=>{
change()
},[input])

const change =()=>{
 input.inputValue===" " ? setsonuc( input.inputValue2) : setsonuc( input.inputValue);
 input.inputValue2===" " ? setsonuc( input.inputValue) : setsonuc( input.inputValue2);
}

const make =(e)=>{
  setInput(() => ({ ...input, [e.target.name]: e.target.value }));
  //console.log(input)
}
  return (
      <div>
          <input type='text' name="inputValue" onChange={make} />
          <input type='text' name="inputValue2" onChange={make} />
          <p>{sonuc}</p>
         {/* <Input value={inputValue} ot={inputValue2}/>
          <İm/>
          <Prev /> */}
      </div>
  );
};

export default Home;