'use client';
import React from "react";
import { Calendar } from "@nextui-org/react";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from '@mui/icons-material/Edit';



export default function App() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', margin: 0 }}>
      <Box className="absolute top-[5.2vh] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <Typography variant="h2" className="">
          <b>promptly.</b>
        </Typography>
        <Typography variant="h6" className="pt-2">
          hi there, username! 
        </Typography>
      </Box>
    
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '110vh',
      width: '100vw', 
      overflow: 'hidden', 
      margin: 0
    }}>
      <div style={{
        transform: 'scale(2)', 
        transformOrigin: 'center',
        margin: 'auto'
      }}>
        <Calendar />
      </div>

    </div>
    </div>
  );
}
