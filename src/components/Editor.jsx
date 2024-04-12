/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import { CloseFullscreenTwoTone } from "@mui/icons-material";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "../App.css";

const CodeEditor = styled(ControlledEditor)`
height:50vh;
`

const Wrapper = styled(Box)({
  flexGrow: 1,
  flexBasis: 0,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0 5px 10px ",
});
const Heading = styled(Box)({
  display: "flex",
  padding: "9px 10px",
});
const Header = styled(Box)({
  background: "#060606",
  display: "flex",
  color: "#FFF",
  fontWeight: "500",
  justifyContent: "space-between",
});

const Editor = ({ mode, heading, icon, color, value, onChange }) => {
  console.log(mode);
  const [open,setOpen] = useState(true)
  const [status,setStatus] = useState(true)
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <Wrapper style={open ? null : {flexGrow: 0}}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              width: 20,
              height: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 0,
              background: color,
              marginRight: 5,
              color: "black",
              fontWeight: 700,
              paddingBottom: 5,
            }}
          >
            {icon}
          </Box>{" "}
          {heading}
        </Heading>
        <CloseFullscreenTwoTone
        fontSize="small"
          style={{ background: "black", color: "#f00", alignSelf: "center" }}
          onClick={()=> setOpen(prev => !prev)}
        />
      </Header>
      <CodeEditor
        className="ControlledEditor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          mode: mode,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Wrapper>
  );
};

export default Editor;
