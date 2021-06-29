import React, { createContext, useRef, useState, useEffect } from "react";
export const ScrollContext = createContext();

const Scroll = (props) => {
  const myRef = useRef();

  return (
    <ScrollContext.Provider value={{ myRef }}>
      {props.children}
    </ScrollContext.Provider>
  );
};
export default Scroll;
