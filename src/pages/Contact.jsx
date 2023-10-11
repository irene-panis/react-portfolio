/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // set states so we can keep track of input fields
  const [inputName, setInputName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // for storing empty field errors
  const [errors, setErrors] = useState({
    inputName: '',
    email: '',
    message: ''
  });

  // state changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'inputName') {
      setInputName(value);
      setErrors({ // on input change remove error
        ...errors,
        [name]: ''
      });
    } else if (name === 'email') {
      setEmail(value);
      setErrors({
        ...errors,
        [name]: ''
      });
    } else if (name === 'message') {
      setMessage(value);
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // for handling focus changes, checks for empty inputs
  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Check if the field is empty on blur
    if (value.trim() === '') {
      if (name === 'inputName') {
        setErrors({ // setting error if empty field
          ...errors,
          [name]: `Name is required.` // otherwise it would say 'inputName' - aesthetic choice
        });
      } else {
        setErrors({
          ...errors,
          [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`
        });
      }
    } else {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };


  return (
    <div className="contact flex flex-col gap-5 lg:w-1/3 w-5/6">
      <h2 className="text-2xl">Let's chat!</h2>
      <form id="contact-form" className="flex flex-col gap-5" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>

        <input type="hidden" name="access_key" value="a499c407-de41-4e17-b58b-1ec11eb4a622"/>
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="rounded-lg text-black pl-2" name="inputName" value={inputName} onChange={handleInputChange} onBlur={handleBlur} required />
          {errors.inputName && <p className="error">{errors.inputName}</p>}
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" className="rounded-lg text-black pl-2" name="email" value={email} onChange={handleInputChange} onBlur={handleBlur} required />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Message:</label>
          <textarea id="message" className="rounded-lg text-black pl-2" name="message" value={message} rows="4" onChange={handleInputChange} onBlur={handleBlur} required></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        
        <input type="submit" value="Submit" className="bg-white text-black w-1/5 rounded-lg font-bold hover:bg-black hover:text-white py-1"/>
      </form>
      <div className="flex flex-col">
        <span>Phone: 949 923 8622</span>
        <span>Email: irenempanis@gmail.com</span>
      </div>
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  );
}