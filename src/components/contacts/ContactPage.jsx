import React from 'react';
import { useState } from 'react';


function ContactPage() {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    message:'',
  });

  const submitForm = () =>{
    e.preventDefault();

    if (formInput.name.length < 5){
      console.error('Name should be min length of 5 characters');
      return;
    }
    console.log(formInput);
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
         minLength={5}
         placeholder="Name" value={formInput.name}
         onChange={(e) => setFormInput({...formInput, name: e.target.value})}
        />
        <input placeholder="Email" value={formInput.email}
         onChange={(e) => setFormInput({...formInput, email: e.target.value})}/>

        <textarea placeholder="Message"value={formInput.message}
         onChange={(e) => setFormInput({...formInput, message: e.target.value})} />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default ContactPage;