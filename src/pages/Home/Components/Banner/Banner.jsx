const Banner = () => {
  const handleDownload = () => {
    // using Java Script method to get PDF file
    fetch(
      "https://drive.google.com/file/d/1jQpW8QzAseURP-j6xoPlsrNKgeMDdznV/view?usp=sharing"
    ).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Mostafizur_Rahman_CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <div
      className='flex h-96 my-10'
      style={{
        background: "url(https://i.ibb.co/JnnsVvB/banner.jpg) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className='gap-y-2'>
        <div className='flex flex-col justify-center p-10 ml-10'>
          <h1 className='mb-5 text-5xl font-bold mt-10'>Mostafizur Rahman</h1>
          <p className='mb-5'>Software Engineer</p>
          <button
            className='btn btn-primary rounded-lg w-1/4'
            onClick={handleDownload}
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
