import React from 'react';

function IndividualComment({value}) {
  console.log(value);
  return (
    <div>
        <p>Name: {value.name}</p>
        <p>"{value.content}"</p>
    </div>
  );
}

export default IndividualComment;