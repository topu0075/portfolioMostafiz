import { MdHomeWork } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work '
          contentStyle={{ background: "#008170", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date='2021 - Present'
          iconStyle={{ background: "#092635", color: "#fff" }}
          icon={<MdHomeWork />}
        >
          <h3 className='vertical-timeline-element-title text-xl font-bold'>
            Software Engineer (Blockchain)
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>BJIT</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#005B41", color: "#fff" }}
          date='2020 - 2021'
          iconStyle={{ background: "#092635", color: "#fff" }}
          icon={<MdHomeWork />}
        >
          <h3 className='vertical-timeline-element-title text-xl font-bold'>
            Jr. Web Developer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            graphic people || software people
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
