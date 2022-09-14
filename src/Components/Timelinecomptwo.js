import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export default function Timelinecomptwo() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <DeveloperModeIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Web Development Internship
                    </Typography>
                    <Typography>At Awetecks Pvt
                        Ltd</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                    <BeenhereIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Volunteership
                    </Typography>
                    <Typography>At MeeBuddy Pvt Ltd</Typography>
                </TimelineContent>
            </TimelineItem>
            

        </Timeline>
    );
}
