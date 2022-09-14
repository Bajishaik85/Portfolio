import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import SchoolRounded from '@mui/icons-material/SchoolRounded';
import BackpackSharpIcon from '@mui/icons-material/BackpackSharp';

export default function Timelinecomp() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.dark"
        >
        <strong className='fs-5'>2019-2023</strong>  
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolRounded/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Graduation
          </Typography>
          <Typography>Rgukt IIIT Ongole</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.dark"
        >
        <strong className='fs-5'>2017-2019</strong>  

        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Preuniversity Course
          </Typography>
          <Typography>Rgukt IIIT Ongole</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.dark"
        >
        <strong className='fs-5'>2016-2017</strong>  

        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <BackpackSharpIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            SSC
          </Typography>
          <Typography>Ap Model School,Dachepalli</Typography>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}
