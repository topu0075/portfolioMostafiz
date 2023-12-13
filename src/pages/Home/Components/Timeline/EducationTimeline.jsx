import { FaUniversity } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationTimeline = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work '
          contentStyle={{ background: "#008170", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date='2015 - 2020'
          iconStyle={{ background: "#092635", color: "#fff" }}
          icon={<FaUniversity />}
        >
          <h3 className='vertical-timeline-element-title text-xl font-bold'>
            B.Sc in Computer Science & Engineering
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Ahasanullah University of Science & Technology
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#005B41", color: "#fff" }}
          date='2012 - 2014'
          iconStyle={{ background: "#092635", color: "#fff" }}
          icon={<FaUniversity />}
        >
          <h3 className='vertical-timeline-element-title text-xl font-bold'>
            HSC
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Govt. Science College, Tejgaon
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#008170", color: "#fff" }}
          date='2010 - 2012'
          iconStyle={{ background: "#092635", color: "#fff" }}
          icon={<FaUniversity />}
        >
          <h3 className='vertical-timeline-element-title text-xl font-bold'>
            SSC
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Motijheel Model High School
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default EducationTimeline;
