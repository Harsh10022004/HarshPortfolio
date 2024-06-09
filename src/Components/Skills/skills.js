import Uppertext from './uppertext.js';
import './skills.css';
import Langdb from './langdb.js';
import FrameTech from './FrameTech.js'; 
import ToolsPlatforms from './ToolsPlatforms.js';

function skills() 
{
    return (
        <div className="skills">
            <div className='skillsheading'>
                <h1>Skills</h1>
            </div>
            <div id="text">
                <Uppertext text="I relish the opportunity to engage with cutting-edge technologies, frameworks, and databases, and I have cultivated an exceptional proficiency in navigating and mastering these advanced tools." />
            </div>
            <div id="skillset">
                <Langdb className="skillsets" />
                <FrameTech className="skillsets"/>
                <ToolsPlatforms className="skillsets"/>
            </div>
        </div>
    );
}

export default skills;