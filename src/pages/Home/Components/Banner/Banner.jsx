const Banner = () => {
  return (
    <div
      className='flex h-96 my-10'
      style={{
        background: "url(https://i.ibb.co/L6nV4Kg/banner.png) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=''>
        <div className='flex justify-center'>
          {/* <h1 className='mb-5 text-5xl font-bold'>Mostafizur Rahman</h1>
            <p className='mb-5'>Software Engineer</p> */}
          {/* <button className='btn btn-primary rounded-lg'>Resume</button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
