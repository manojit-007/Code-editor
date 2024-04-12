/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// TypeProvider.js
import React, { createContext, useState } from "react";

export const DataContext = createContext();

const TypeProvider = ({ children }) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  
  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default TypeProvider;
