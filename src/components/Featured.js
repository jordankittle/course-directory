import React from 'react';

const Featured = ({match}) => {
  let teacherName = `${match.params.fname} ${match.params.lname || ""}`;
  let topic = match.params.topic;
  return (
    <div className="main-content">
      <h2>{teacherName}</h2>
      <p>Introducing <strong>{ teacherName }</strong>, a teacher who loves teaching courses about <strong>{ topic }</strong>!</p>
    </div>
  );
}

export default Featured;