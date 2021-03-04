import React, {useState, useEffect} from 'react';

function TodoItem(props) {
    return (
        <li className={' border-b-2 border-cool-gray-200 p-1'}>
            <input type="checkbox"/>&nbsp;&nbsp;
            <span className={'text-gray-700 font-semibold text-sm'}>{props.item.str}</span>
            <i className={'fa fa-trash text-red-400 float-right'} />
        </li>
    );
}

export default TodoItem;
