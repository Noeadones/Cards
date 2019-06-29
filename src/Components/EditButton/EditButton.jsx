import React from 'react'

const EditButton = (props) => {
    return (
        <div>
            <button onClick={props.clicked}>{props.children}</button>
        </div>
    )
}

export default EditButton
