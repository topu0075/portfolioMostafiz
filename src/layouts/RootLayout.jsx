import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Root = () => {
  return (
    <div className='flex flex-col justify-around'>
      <Header></Header>
      <div className='container mx-auto'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
