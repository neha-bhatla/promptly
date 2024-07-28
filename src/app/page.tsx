'use client';
import React from "react";
import { Calendar } from "@nextui-org/react";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

export default function App() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', margin: 0 }}>
      <Box sx={{
        position: 'absolute',
        top: '5.2vh', 
        left: '50%', 
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          promptly.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "regular", paddingTop: '10px' }}>
          hi there, username! 👋🏼
        </Typography>
      </Box>

      <Box sx={{position: 'absolute',
        top: '91vh', 
        left: '50%', 
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',}}>

        <Link href="/logmood" passHref>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </Link>
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
