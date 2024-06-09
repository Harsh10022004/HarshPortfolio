import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experience.css';

function Experience() {
    const experience = [
        {
            companyName: "Tower Research Capital",
            role: "Senior Software Engineer(SDE 3)",
            year: "2023 - Present",
        },
        {
            companyName: "Meta(Facebook)",
            role: "Software Engineer and Developer",
            year: "2022",
        }
    ];

    return (
        <div>
            <h1 className="heading">Experience</h1>
            <VerticalTimeline>
                {experience.map((exp, index) => (
                    <VerticalTimelineElement 
                        key={index} 
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#150F47', color: 'yellow' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(90, 89, 89)' }}
                        date={exp.year}
                        iconStyle={{ background: '#B0FA00', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ backgroundColor: '#150F47' }}>{exp.companyName}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ backgroundColor: '#150F47' }}>{exp.role}</h4>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Experience;