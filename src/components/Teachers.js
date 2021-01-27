import React from 'react';
import TeacherList from '../data/teachers';
import {Link} from 'react-router-dom';

const Teachers = ({match}) => {
  let teachers = TeacherList.map((teacher) => {
    let teacherURL = `${match.url}/${teacher.subject}/${teacher.fname}/${teacher.lname || ""}`;
    return (
        <li className="teacher" key={teacher.id} >
          <Link to={teacherURL}>
            <img className="teacher-img" src={teacher.img_src} alt="teacher" />
            <h3>{teacher.fname} {teacher.lname}</h3>
          </Link>
          <p>{teacher.bio}</p>
        </li>

    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Teachers</h2>
      <ul className="group">
        {teachers}    
      </ul>
    </div>
  );
}

export default Teachers;