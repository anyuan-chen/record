import { Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export default function TripleOverlay({ src }) {
  return (
    <Box sx={{ position: "relative", display: "flex", width: "510px" }}>
      <motion.img
        src={src[0]}
        style={{
          height: "190px",
          width: "190px",
          transform: "rotate(-20deg) translateX(20px) translateY(50px)",
          zIndex: "3",
        }}
      ></motion.img>
      <motion.img
        src={src[1]}
        style={{
          height: "200px",
          width: "200px",
          zIndex: "2",
        }}
      ></motion.img>
      <motion.img
        src={src[2]}
        style={{
          height: "220px",
          width: "220px",
          transform: "rotate(20deg) translateX(-100px) translateY(30px)",
          zIndex: "1",
        }}
      ></motion.img>
    </Box>
  );
}
