import React from 'react';

import './styles/Card.css';

const Card= (props)=>{
    const background = 'card'+props.className;
    return (<div className={background}>
        {props.children};
    </div>);
};

export default Card;