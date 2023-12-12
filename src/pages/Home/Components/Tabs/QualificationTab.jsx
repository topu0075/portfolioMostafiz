import { FaUniversity } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const QualificationTab = () => {
  return (
    <div className='mx-auto mt-10'>
      <h1 className='font-serif font-extrabold text-4xl text-center border-b-2 my-10'>
        Qualification
      </h1>
      <Tabs>
        <div className='flex items-center gap-x-2'>
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

        <TabPanel>{/* <EducationTimeline></EducationTimeline> */}</TabPanel>
        <TabPanel>{/* <WorkExperience /> */}</TabPanel>
      </Tabs>
    </div>
  );
};

export default QualificationTab;
