import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Root = () => {
  return (
    <div className='flex flex-col justify-around'>
      <div className='w-10/12 mx-auto'>
        <Header></Header>
      </div>
      <div className='container mx-auto'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
