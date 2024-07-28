'use client';
import React from 'react';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentNeutralOutlinedIcon from '@mui/icons-material/SentimentNeutralOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import SickOutlinedIcon from '@mui/icons-material/SickOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import {CheckboxGroup, Checkbox} from "@nextui-org/checkbox";

export default function LogMood() {
  return (
    <div>
      <Box sx={{
          position: 'absolute',
          top: '10vh',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '260px',
      }}>
        

        <Typography variant="h4" sx={{ fontWeight: "bold"}}>
          how are you feeling today?
        </Typography>

        <Box sx={{
            position: 'absolute',
            top: '20vh',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '180px',
        }}>
          <SentimentVerySatisfiedOutlinedIcon style={{ transform: 'scale(7)' }} />
          <SentimentSatisfiedOutlinedIcon style={{ transform: 'scale(7)' }} />
          <SentimentNeutralOutlinedIcon style={{ transform: 'scale(7)' }} />
          <SentimentDissatisfiedOutlinedIcon style={{ transform: 'scale(7)' }} />
          <SickOutlinedIcon style={{ transform: 'scale(7)' }} />
        </Box>

        <Typography variant="h4" sx={{ fontWeight: "bold"}}>
          were you kind to yourself today?
        </Typography>

        <Box sx={{
            position: 'absolute',
            top: '55vh',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '180px',
        }}>
          <ThumbUpOffAltOutlinedIcon style={{ transform: 'scale(7)' }} />
          <ThumbDownOffAltOutlinedIcon style={{ transform: 'scale(7)' }} />
        </Box>
        <CheckboxGroup style={{ transform: 'scale(1.5)' }}>
          <Checkbox value="family" >friends</Checkbox>
          <Checkbox value="work" >work</Checkbox>
          <Checkbox value="school" >school</Checkbox>
          <Checkbox value="friends" >friends</Checkbox>
          <Checkbox value="activies" >activies</Checkbox>
          <Checkbox value="no reason">no reason, I just feel like this</Checkbox>
        </CheckboxGroup>
      </Box>
    </div>
  );
}
