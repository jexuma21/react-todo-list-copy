import React, {useState } from "react";

const Item = ({ 
    list, 
    handleAddToList,
    url}) => {

    const [inputValue, setInputValue] = useState("");

    //CREATE NEW ITEM
	const newItem = (value) =>{
		return {
			label: value,
			done: false
		}
	}

    // FUNCTION THAT ALLOWS PRESS ENTER TO CREATE AN ARRAY WITH THE VALUE OF THE INPUT
	const pressEnterToInput = async(e) =>{
		if(e.key === 'Enter' && inputValue !== '')
			{
			const item = newItem(inputValue);
			const newTodoList = [...list, item]
			handleAddToList(newTodoList)
		
			fetch(url, {
				method: "PUT",
				body: JSON.stringify(newTodoList),
				headers: {
				"Content-Type": "application/json"
				}
			})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp; // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.catch(error => {
				//error handling
				console.log(error);
			});

            // CLEARS THE INPUT AFTER YOU PRESS ENTER
			setInputValue("")
			}
		}

    return (
        <input 
        className="list-group-item"
        onKeyDown={pressEnterToInput} 
        onChange={ e => setInputValue(e.target.value)} 
        value={inputValue} 
        type="text" 
        placeholder="Add a task to do"
        />
      )
    }

export default Item