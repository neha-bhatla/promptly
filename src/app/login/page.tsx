import React from 'react';
import { Box, Typography } from '@mui/material'; 
import {Input} from "@nextui-org/input";
import {Button, ButtonGroup} from "@nextui-org/button";
import Link from 'next/link';

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
          login to your account!
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <Input type="text" label="username" placeholder="please enter your username" fullWidth />
          <Input type="password" label="password" placeholder="please enter your password" fullWidth />
          <Link href="/" passHref><Button color="secondary" >login</Button></Link>
        </Box>
      </Box>
    </Box>
  );
}
