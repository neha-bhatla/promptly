import React from 'react';
import { Box, Typography } from '@mui/material'; 
import {Input} from "@nextui-org/input";
import {Button, ButtonGroup} from "@nextui-org/button";


export default function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
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
          register for an account today :)
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <Input type="first name" label="first name" placeholder="please enter your first name" fullWidth />
            <Input type="last name" label="last name" placeholder="please enter your last name" fullWidth />  
            <Input type="username" label="username" placeholder="please enter a username" fullWidth />
            <Input type="password" label="password" placeholder="please enter a password" fullWidth />
            <Button color="secondary" >create account</Button>
        </Box>
      </Box>
    </Box>
  );
}
