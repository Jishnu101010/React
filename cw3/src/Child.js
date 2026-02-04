import React from 'react';

function Child(props) {
    let buttonText = "Turn ON";
    if (props.lightOn) {
        buttonText = "Turn OFF";
    }
    return (
    <button onClick={props.toggleLight}>{buttonText}
    </button>
  );
}

export default Child;