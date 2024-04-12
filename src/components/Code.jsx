/* eslint-disable no-unused-vars */
// Code.js
import React, { useContext } from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/TypeProvider"; // Import DataContext from the context file

const Container = styled(Box)({
  background: "#000",
  display: "flex",
  color: "#FFF",
  fontWeight: "500",
  width: "100%",
  justifyContent: "space-evenly",
  height: "50vh",
  margin: "0",
});

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container >
      <Editor
        mode="xml"
        heading="HTML"
        icon="<>"
        color="#ff935d"
        value={html}
        onChange={setHtml}
      />
      <Editor
        mode="css"
        heading="CSS"
        icon="*"
        color="#0ebeff"
        value={css}
        onChange={setCss}
      />
      <Editor
        mode="js"
        heading="JAVASCRIPT"
        icon="{}"
        color="#fcd000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;
