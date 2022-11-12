import React from "react";
import PropTypes from "prop-types";

export const Item = ({toDo, list, addToList}) => {

    const handleRemoveButton = () => {
        handleaddToList(list.filter(item => item.id !== toDo.id))
    }

    return (
    <div className="todoitem">
        <p>{props.toDo.string}</p>
        
        <button
        onClick={handleRemoveButton}
        >
        Delete
        </button>
    </div>

    )
}

Item.prototypes = {
    toDo: PropTypes.object,
    list: PropTypes.array,
    handleaddToList: PropTypes.func
}