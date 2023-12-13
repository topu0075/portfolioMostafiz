import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const ContractMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4l74387",
        "template_212j229",
        form.current,
        "gITyx9mY_VfOvA0dq"
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            Swal.fire({
              title: "Success!",
              text: "Email Send successfully",
              icon: "success",
              confirmButtonText: "Close",
            });
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='hero my-10 py-14 bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='text-center lg:text-left w-1/2'>
          <h1 className='text-5xl font-bold font-serif'>Contract Me</h1>
          <p className='py-6'>
            If you have any query feel free to contract with me. I will reach to
            you as early as possible. Looking forward to be at you assist.
          </p>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type='text'
              name='user_name'
              className='input input-bordered rounded-md'
              placeholder='Name'
            />
            <label>Email</label>
            <input
              type='email'
              name='user_email'
              className='input input-bordered rounded-md'
              placeholder='Emails'
            />
            <label>Message</label>
            <textarea
              name='message'
              className='textarea textarea-bordered rounded-md'
              placeholder='Message'
            />
            <input
              type='submit'
              value='Send'
              className='btn btn-secondary btn-outline rounded-md mt-3'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContractMe;
