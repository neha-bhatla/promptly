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
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from 'next/link';

export default function LogMood() {
  return (
    <center>
      <div>
        <Box sx={{ margin: 'auto 400px', marginTop: '50px', marginBottom: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{display: 'flex', flexDirection: 'row', gap: '50px'
        }}>
        
        <Link href="/" passHref>
        <Button color="secondary" >
            back
        </Button>
        </Link>

          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: '110px' }}>
            how are you feeling today?
          </Typography>

          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '180px', marginBottom: '110px' }}>
            <button>
              <SentimentVerySatisfiedOutlinedIcon style={{ transform: 'scale(7)' }} />
            </button>
            <button>
              <SentimentSatisfiedOutlinedIcon style={{ transform: 'scale(7)' }} />
            </button>
            <button>
              <SentimentNeutralOutlinedIcon style={{ transform: 'scale(7)' }} />
            </button>
            <button>
              <SentimentDissatisfiedOutlinedIcon style={{ transform: 'scale(7)' }} />
            </button>
            <button>
              <SickOutlinedIcon style={{ transform: 'scale(7)' }} />
            </button>
          </Box>

          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: '110px' }}>
            were you kind to yourself today?
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '180px', marginBottom: '110px' }}>
            <button>
              <ThumbUpOffAltOutlinedIcon style={{ transform: 'scale(7)' }} />
            </button>
            <button>
              <ThumbDownOffAltOutlinedIcon style={{ transform: 'scale(7)' }} />
            </button>
          </Box>

          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: '85px' }}>
            what made you feel this way today?
          </Typography>
          
          <Box sx={{ marginBottom: '110px' }}>
            <CheckboxGroup style={{ transform: 'scale(1.5)' }}>
              <Checkbox value="family">friends</Checkbox>
              <Checkbox value="work">work</Checkbox>
              <Checkbox value="school">school</Checkbox>
              <Checkbox value="friends">friends</Checkbox>
              <Checkbox value="activities">activities</Checkbox>
              <Checkbox value="no reason">no reason, I just feel like this</Checkbox>
            </CheckboxGroup>
          </Box>

          <Textarea 
            label="let's journal! ✍🏼"
            placeholder="start an entry"
            size="lg"
            style={{ marginBottom: '50px' }} 
          />
          
          <Button color="primary" style={{ marginTop: '30px' }} >
            Submit
          </Button>
          
        </Box>
      </div>
    </center>
  );
}
