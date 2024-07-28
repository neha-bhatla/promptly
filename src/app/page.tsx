'use client';
import React from "react";
import { Calendar } from "@nextui-org/react";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { Button } from "@nextui-org/button";

export default function App() {
  return (
    <center>
      <div style={{ position: 'relative', margin: 0 }}>
        <Box sx={{marginBottom: '20px'}}>
        <Box sx={{
          marginTop: '50px',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            promptly.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "regular", paddingTop: '10px' }}>
            hi there! 👋🏼
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap:'10px'
          }}>
          <Link href="/login" passHref>
            <Button color="secondary" style={{ padding: '10px', marginTop: '20px' }}>
              login
            </Button>
          </Link>
          <Link href="/register" passHref>
            <Button color="secondary" style={{ padding: '10px', marginTop: '20px' }}>
              register
            </Button>
          </Link>
          </Box>
        </Box>
      
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',  
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

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '25px',
          marginBottom: '50px',  
        }}>
          <Link href="/logmood" passHref>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </Link>
        </Box>
        </Box>
      </div>

    </center>
  );
}
