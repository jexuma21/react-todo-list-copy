import React, { useState } from "react";
import { Item } from "./Item.jsx";
import { ItemLeft } from "./ItemLeft.jsx";


export const Input = () => {

    const [inputValue, setInputValue] = useState("");
    const [list, addToList] = useState([]);
    const [id, setID] = useState(1);
    
    var itemsLeftNumber = list.length;

    const url = 'https://assets.breatheco.de/apis/fake/todos/user/alesanchezr'

    const getFetch (){
        return fetch(url)
        .then (response => {
            
        })
    }

    const handKeyDown = (e) => {
        if(e.key === 'Enter') {
            const item = {
                id: id,
                string: inputValue

            }

            addToList([...list, item])
            setInputValue("")
            setId(id => is +1)
            console.log(list);
        }
    }
    return (
        <div>
            <input 
            type="text" 
            placeholder="What needs to be done?"
            onChange={e => setInputValue(e.target.value)} 
            value={inputValue}
            onKeyDown = {handKeyDown}
            />
            <div>
                {list.map((toDo, key) => {
                    return <Item 
                    toDo={toDo}
                    key={toDo.id}
                    list={list}
                    handleAddToList={inputValue => addToList(inputValue)}
                    />
                    
                })}
            </div>
            <ItemLeft quantity={itemsLeftNumber}/>
        </div>

    )
}