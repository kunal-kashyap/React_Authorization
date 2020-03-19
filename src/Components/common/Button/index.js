import React from 'react'

const Button = (props) => {

    return (
        <div className="form-group">
            <button type={props.type} onClick={props.clickHandler}>
                {props.value}
            </button>
        </div>
    )

}

export default Button