import React, { useState, useEffect } from "react";

export const Input = ({ value, ot }) => {
  const [sonuc, setSonuc] = useState(ot);

  useEffect(() => {
    if ( sonuc !==" ") {
      setSonuc(value);
    } else if(value !== " "){
        setSonuc(ot);
    }
    
  });

  return (
    <div>
      <p>{sonuc}</p>
    </div>
  );
};
