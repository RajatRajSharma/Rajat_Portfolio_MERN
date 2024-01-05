import React from 'react'
import './Educations.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";


const Educations = () => {
  return (
    <>
        <div className='container education' id='education'>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase' style={{marginLeft:"-0.2em"}}><em>Academic Chronicle</em></h2>
            <hr />
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work my-3"
                    contentStyle={{ background: 'rgb(251 248 248)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(251 248 248)' }}
                    date="2018 - 2019"
                    iconStyle={{ background: '#e67e22', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">10th standard</h3>
                    <h4 className="vertical-timeline-element-subtitle">CBSC</h4>
                    <p>
                    Kendriya Vidyalaya No.1 AFS, Lohegaon, Pune, India
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work my-3"
                    contentStyle={{ background: 'rgb(251 248 248)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(251 248 248)' }}
                    date="2020 - 2021"
                    iconStyle={{ background: '#e67e22', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">12th standard</h3>
                    <h4 className="vertical-timeline-element-subtitle">HSC</h4>
                    <p>
                    Arham Group of Institutes, Pune Cantonment, Pune, India
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work my-3"
                    contentStyle={{ background: 'rgb(251 248 248)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(251 248 248)' }}
                    date="2022 - 2025"
                    iconStyle={{ background: '#e67e22', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Technology (Btech)</h3>
                    <p>
                    Pune Vidhyarthi Griha's College of Engineering and Technology, Pune, India
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </>
  )
}

export default Educations