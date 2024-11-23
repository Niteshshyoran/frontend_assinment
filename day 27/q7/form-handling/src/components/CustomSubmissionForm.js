import React, { useRef } from 'react';

const CustomSubmissionForm = () => {
  const formRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    messageRef.current.textContent = `Submitted: ${JSON.stringify(data)}`;
  };

  return (
    <div>
      <h2>Custom Submission</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" />
        <input name="email" type="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
      <p ref={messageRef}></p>
    </div>
  );
};

export default CustomSubmissionForm;
