import React, { useState } from 'react';

function App() {
  const[message, setMessage] = useState('');
  const[response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1.3000',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({ message }),
    })
    .then((res)=>res.json())
    .then((data)=> setResponse(data.message));
  };

  return (
    <div className="App">
      <form onClick={handleSubmit}>
        <textarea 
        value={message} 
        placeholder="Ask Steve Anything"
        onChange={(e) => setMessage(e.target.value)}>
        </textarea>
        <button ype="submit">
          Submit
        </button>
      </form>
      <div>
        {response}
      </div>
    </div>
  );
}

export default App;
