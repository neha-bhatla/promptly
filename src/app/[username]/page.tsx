"use client"
import React from "react";
import { Calendar } from "@nextui-org/react";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import {today, getLocalTimeZone} from "@internationalized/date";
import {useState} from "react";
import DateEntries from "../components/dateEntries/dateEntries";
import api from "../../api/axiosInstance";


const UserPage: React.FC<{ params: { username: string } }> = ({ params }) => {
  const { username } = params; 
  
  let [value, setValue] = useState();
  let [entries, setEntries] = useState();


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
            hi there, {username}! 👋🏼
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "regular", paddingTop: '10px' }}>
            let's journal!
          </Typography>



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

          <Calendar 

            aria-label="Date (No Selection)"
            value={value} 
            onChange={setValue}
          />

          {value && <DateEntries dateStr={value.toString()} username={username} />}

          </div>
        </div>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '25px',
          marginBottom: '50px',  
        }}>
          <Link href={`/logmood/${username}`} passHref>
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
export default UserPage;