import { FaUniversity } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EducationTimeline from "../Timeline/EducationTimeline";
import WorkExperience from "../Timeline/WorkExperience";
const QualificationTab = () => {
  return (
    <div className='w-11/12 mx-auto mt-10'>
      <h1 className='font-serif font-extrabold text-4xl text-center mb-5'>
        Qualification
      </h1>
      <div className='mx-auto w-1/4 border-b-2 mb-10'></div>
      <Tabs>
        <div className='flex justify-center items-center gap-x-2'>
          <TabList>
            <Tab>
              <div className='flex items-center gap-x-2'>
                <FaUniversity />
                Education
              </div>
            </Tab>
            <Tab>
              <div className='flex items-center gap-x-2'>
                <MdHomeWork />
                Work Experience
              </div>
            </Tab>
          </TabList>
        </div>

        <TabPanel className='my-10'>
          <EducationTimeline></EducationTimeline>
        </TabPanel>
        <TabPanel>
          <WorkExperience />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default QualificationTab;
