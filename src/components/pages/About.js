import React from 'react';

const About = (props)=> {
    console.log(props)
    return ( 
        <React.Fragment>
            <h1>About</h1>
            <p>This is a Todo list app v1.0.0. It was part of a React crash course</p>
        </React.Fragment>
     );
}
 
export default About;