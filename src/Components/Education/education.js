import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.css';

function Education() {
    const education = [
        {
            instituteName: "Scaler School of Technology",
            course: "B.Sc from BITS PILANI and M.Sc from Woolf University",
            score: "CGPA: 10.0",
            year: "Year : 2023 - Now",
        },
        {
            instituteName: "Star International School",
            course: "Class : 12th",
            score: "Percentage: 87%",
            year: "Year : 2022",        
        },
        {
            instituteName: "Mt. Litera Zee School",
            course: "Class : 10th",
            score: "Percentage: 95%",
            year: "Year : 2020",        
        }
    ];
    return (
        <div>
            <h1 className="heading">Education</h1>
            <VerticalTimeline>
                {education.map((edu, index) => (
                    <VerticalTimelineElement 
                        key={index} 
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#150F47', color: '#77F00E' }}
                        contentArrowStyle={{ borderRight: '7px solid  #B7FA00' }}
                        date={edu.year}
                        iconStyle={{ background: '#B7FA00', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ backgroundColor: '#150F47' }}>{edu.instituteName}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ backgroundColor: '#150F47' }}>{edu.course}</h4>
                        <p style={{ backgroundColor: '#150F47' }}>{edu.score}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Education;
