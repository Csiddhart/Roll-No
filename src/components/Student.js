import React from 'react';
import Card from './Card';

import './styles/Student.css';

const Student=(props)=>{
    return(
        <Card className='dtwo'>
            <div className='dthree'>
                <h2>{props.roll}</h2>
                 <h2>{props.name}</h2>
            </div>
        </Card>
    );
};

export default Student;