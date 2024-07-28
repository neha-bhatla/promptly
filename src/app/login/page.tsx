"use client";
import React from 'react';
import { Box, Typography } from '@mui/material'; 
import {Input} from "@nextui-org/input";
import {Button, ButtonGroup} from "@nextui-org/button";
import Link from 'next/link';
import {useEffect, useState} from 'react';
import api from '../../api/axiosInstance';
import LoginResponse from '../components/loginResponse/loginResponse';
import { Message } from '@mui/icons-material';

export default function Login() {

  const[username, setUsername] = useState<string>("");
  const[password, setPassword] = useState<string>("");
  const[message, setMessage] = useState<string>("");
  




  const handleLogin = async () => {
    const loginData = {username, password};
    try {
      const response = await api.post('/api/login', loginData);
      setMessage(response.data.message);

    } catch (error) {
      console.error('Error logging in', error);
 
    }
  };


  return (
    <>
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '175px', 

      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '400px',
          padding: '20px',
          boxShadow: 3,
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '40px' }}>
          login to your account!
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <Input type="text" label="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="please enter your username" fullWidth />
          <Input type="password" label="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="please enter your password" fullWidth />
          <Button color="secondary" onPress={handleLogin}>login</Button>

        </div>

      </Box>
    </Box>

      <LoginResponse responseMessage={message} />
      
    </>
  );
}
