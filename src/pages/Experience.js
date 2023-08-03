import React from 'react';
import { VerticalTimeline, 
  VerticalTimelineElement,
 } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { School } from '@material-ui/icons';


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#000080'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2017 - 2018 (10th)'
        iconStyle={ {background: "#2E5A88", color: "#fff"}}
        icon={<School />}>
          <h3 className='vertical-timeline-element-title'>
            St. Antony's Matric Hr, sec School, 
            Kottivakkam, 
            Chennai,
            TamilNadu, India.
          </h3>
          <p> Secondary School Leaving Certificate</p>
          <p>Percentage - 75%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2016- 2018 (12th)'
        iconStyle={ {background: "#2E5A88", color: "#fff"}}
        icon={<School />}>
          <h3 className='vertical-timeline-element-title'>
            St. Antony's Matric Hr, sec School, 
            Kottivakkam, 
            Chennai,
            TamilNadu, India.
          </h3>
          <p> Higher Secondary Certificate</p>
          <p>Percentage - 88.9%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2018 - 2021 (BCA)'
        iconStyle={ {background: "#2E5A88", color: "#fff"}}
        icon={<School />}>
          <h3 className='vertical-timeline-element-title'>
            Patrician College of Arts and Science,
            Adyar, 
            Chennai,
            TamilNadu, India.
          </h3>
          <p> Bachelor of Computer Applications (BCA)</p>
          <p>CGPA - 8.19</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2021 - 2023 (MCA)'
        iconStyle={ {background: "#2E5A88", color: "#fff"}}
        icon={<School />}>
          <h3 className='vertical-timeline-element-title'>
            College of Engineering, Anna University,
            Guindy, 
            Chennai,
            TamilNadu, India.
          </h3>
          <p> Master's of Computer Applications (MCA)</p>
          <p>CGPA - 7.1 ( for 3 semesters)</p>
          <p>waiting for 4th semester results</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience