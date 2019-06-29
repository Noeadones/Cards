import React from 'react'

const SaveButton = (props) => {
    return (
        <div>
            <button onClick={props.clickedr}>{props.children}</button>
        </div>
    )
}

export default SaveButton
