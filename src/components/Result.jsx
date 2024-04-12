/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Box, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/TypeProvider";

const ResultBox = styled(Box)`
height: 41vh;
`

const Result = () => {
  const { html, css, js } = useContext(DataContext);
  const [src, setSrc] = useState("");
  const code = `<html>
<body>${html}</body>
<style>${css}</style>
<script>${js}</script>
  </html>`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(code);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <ResultBox>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </ResultBox>
  );
};

export default Result;
