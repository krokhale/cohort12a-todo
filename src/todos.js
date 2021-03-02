import React, {useState, useEffect} from 'react';

function Todos(props) {

    const [inputText, setInputText] = useState('');
    const [list, setList] = useState([]);

    const onInputChange = async (ev) => {
        // console.log(ev.currentTarget.value)
        setInputText(ev.currentTarget.value)
    };

    const addItem = async () => {
        // spread operator
        // lookup updating arry in a functional component in react
        setList([...list, inputText]);
    };

    return (
        <div className={'m-10 p-5 border'}>
            {/*todos page*/}

            <input value={inputText} onChange={onInputChange} type="text" className={'border'}/>&nbsp;
            <button className={'border bg-blue-500'} onClick={addItem}>Add</button>

            <ul>
                {list.map((item, idx) => {
                    return <li key={idx}>
                        {item}
                    </li>
                })}
            </ul>


        </div>
    );
}

export default Todos;
