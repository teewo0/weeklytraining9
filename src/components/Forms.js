import React, { useState } from 'react'

export default function Forms() {

    const [input, setInput] = useState({
        firstName: '',
        email: '',
      });

    const handleChange =(e) => {
        // setInput({name: e.target.value})
        setInput({ ...input, [e.target.name]: e.target.value });
        console.log(input);
      };

      const handleSubmit =(e) => {
          e.preventDefault();
          if (input.firstName && input.email) {
              alert('Thank you for submitting');
          } else {
              alert('please fill the field')
          }
          console.log(input);
        //   axios.post('', input)
      };
      


    return (
        <div>
            <form>
            <input type="text" style={{ border: '2px solid red'}} onChange={(e) => handleChange(e)} placeholder="name" name="firstName"/>
            <input type="email" style={{ border: '2px solid red'}} onChange={(e) => handleChange(e)} placeholder="email" name="email"/>
            <button onClick={handleSubmit}>SUBMIT</button>
            </form>

        </div>
    )
}
