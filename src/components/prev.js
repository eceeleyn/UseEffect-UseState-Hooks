import React, { useState } from "react";

export const Prev = () => {
  const [user, setuser] = useState({
    name: " ",
    surname: " ",
  });

  const handle = (e) => {
    setuser(() => ({ ...user, [e.target.name]: e.target.value }));
    console.log(user);
  };

  return (
    <>
      <input name="name" onChange={handle} />
      <br />
      <input name="surname" onChange={handle} />
    </>
  );
};
