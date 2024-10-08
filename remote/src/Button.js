import React from 'react';

function Button() {
  return (
    <button onClick={()=> alert('Hello From Remote App')}>Click me!</button>
  );
}

export default Button;