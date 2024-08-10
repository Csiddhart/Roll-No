import React from 'react';

import Card from './Card';
import Student from './Student';

import './styles/StudentList.css';

const StudentList=(props)=>{
    return (
        <Card className='design'>
            <Student
              roll={props.st[0].roll}
              name={props.st[0].name}
            />
             <Student
              roll={props.st[1].roll}
              name={props.st[1].name}
            />
             <Student
              roll={props.st[2].roll}
              name={props.st[2].name}
            />
        </Card>
    )
};

export default StudentList;