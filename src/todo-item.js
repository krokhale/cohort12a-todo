import React, {useState, useEffect} from 'react';

function TodoItem(props) {

    const markAsCompleted = async () => {
        console.log('mark this item as completed')
        // make a PUT request and update that particular item and set completed to true

        let res = await fetch(`http://localhost:3000/api/v1/todos/${props.item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({completed: true})
        });

        let data = await res.json();
        console.log(data);
        props.fetchItems();

    };

    const deleteItem = async () => {
        let res = await fetch(`http://localhost:3000/api/v1/todos/${props.item.id}`, {
            method: 'DELETE'
        });
        props.fetchItems();
    };


    return (
        <li className={' border-b-2 border-cool-gray-200 p-1'}>
            {!props.item.completed &&  <span><input onClick={markAsCompleted} type="checkbox"/>&nbsp;&nbsp;</span>}
            {/*<span className={'text-gray-700 font-semibold text-sm'}>{props.item.str}</span>*/}
            <span className={props.item.completed ? 'line-through text-gray-700 font-semibold text-sm' : 'text-gray-700 font-semibold text-sm'}>{props.item.itemTxt}</span>
            {!props.item.completed && <i className={'fa fa-trash text-red-400 float-right cursor-pointer'} onClick={deleteItem} />}
        </li>
    );
}

export default TodoItem;
