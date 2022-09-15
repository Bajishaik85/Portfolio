import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolRounded from '@mui/icons-material/SchoolRounded';
import BackpackSharpIcon from '@mui/icons-material/BackpackSharp';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
function Education() {
  return (
    <>
      <h1 className='m-2 lead text-primary fs-4 fw-bold text-center'>My Education And Experience</h1>


      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BackpackSharpIcon />}
        >
          <h3 className="vertical-timeline-element-title">SSC</h3>
          <p>Completed My Secondary Educaton From Ap Model School,Dachepalli</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<LaptopMacIcon />}
        >
          <h3 className="vertical-timeline-element-title">Preuniversity Course</h3>
          <p>
            Completed My 2 years Of Preuniversity Course from Rgukt IIIT Ongole       </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolRounded />}
        >
          <h3 className="vertical-timeline-element-title">B.Tech</h3>
          <p>
            Graduation under the stream of Electronics And Communication Engineering From Rgukt IIIT Ongole
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BeenhereIcon />}
        >
          <h3 className="vertical-timeline-element-title">MeeBuddy Volunteer</h3>
          <p>
            Worked as a Volunteer in MeeBuddy Pvt Ltd for Training Franchise Manager by explaining the importance of MeeBuddy Dashboard
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<DeveloperModeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <p>
            Completed Web Development Internship From Awetecks Pvt Ltd
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>








    </>
  )
}

export default Education
