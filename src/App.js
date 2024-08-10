import React from 'react';

import StudentList from './components/StudentList';

const App=(props)=>{
      const obj=[
        {
          roll:1,
          name:'Siddharth',
        },
        {
          roll:2,
          name:'Shubojit',
        },
        {
          roll:3,
          name:'Devangan',
        },
      ];

      return (
        <div>
          <StudentList st={obj}/>
        </div>
      );
};

export default App;
