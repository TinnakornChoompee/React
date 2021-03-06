import React from 'react';

// function Greet(props) {
//     return <h1> Hello {props.name} </h1>
// }

const Props = props => {
    return (
        <div>
            <h1> Hello {props.name} </h1>
            {props.children}
        </div>
    )
}

export default Props;