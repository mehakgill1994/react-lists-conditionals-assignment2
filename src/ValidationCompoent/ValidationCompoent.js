import React from 'react';

const ValidationCompoent = (props) => {

    return <div>
        {props.length > 5 ? <p>Text long enough</p> : <p>Text too short</p>}
        </div>
}

export default ValidationCompoent;