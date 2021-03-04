import React, {useState, useEffect} from 'react';
import TodoItem from "./todo-item";

function Todos(props) {

    const [inputText, setInputText] = useState('');
    const [list, setList] = useState([]);

    const [currentTab, setCurrentTab] = useState('all');

    const onInputChange = async (ev) => {
        // console.log(ev)
        // console.log(ev.currentTarget.value)
        setInputText(ev.currentTarget.value)
    };

    const addItem = async () => {
        // spread operator
        // lookup updating arry in a functional component in react
        if(inputText.trim().length>0){
            setList([...list, {str: inputText, status: 'active'}]);
            setInputText('')
        }
    };

    const onEnterPress = async (ev) => {
        if (ev.key === 'Enter') {
            if(inputText.trim().length>0){
                setList([...list, {str: inputText, status: 'active'}]);
                setInputText('')
            }
        }

    };

    // const callAfunc = async () => {
    //     console.log('yay')
    //
    // };

    // toggle menu
    // tim question

    const switchTab = async (tab) => {
        console.log(' i am switching tabs')

    };

    return (
        <div className={'m-10 p-5'}>
            {/*todos page*/}

            {/*<div className={'flex justify-center'}>*/}
            {/*    */}
            {/*</div>*/}
            {/*{JSON.stringify(list)}*/}
            <div className="grid grid-cols-2 gap-4">
                <div className={' p-2'}>
                    {/*<form action="" onSubmit={callAfunc}>*/}
                    {/*    <input value={inputText} onChange={onInputChange} onKeyDown={onEnterPress} type="text" className={'border w-1/2 p-1 border border-gray-300 rounded'}/>*/}
                    {/*    <input type="submit"/>*/}
                    {/*</form>*/}

                    <input value={inputText} onChange={onInputChange} onKeyDown={onEnterPress} type="text" className={'border w-1/2 p-1 border border-gray-300 rounded'}/>
                </div>
                <div className={' p-2'}>
                    <button className={'p-1 rounded pl-3 pr-3 cursor-pointer text-white text-xl bg-blue-500'} onClick={addItem}>Add</button>
                </div>
            </div>

            <br/>
            <br/>
            {list.length>0 && <div className={'bg-gray-100 p-2 rounded'}>
                <ul>
                    {list.map((item, idx) => {
                        return <TodoItem item={item} key={idx}/>

                    })}
                </ul>
            </div>}

            {/*<input value={inputText} onChange={onInputChange} type="text" className={'border'}/>&nbsp;*/}
            {/*<button className={'border bg-blue-500'} onClick={addItem}>Add</button>*/}

            {/*<ul>*/}
            {/*    {list.map((item, idx) => {*/}
            {/*        return <li key={idx}>*/}
            {/*            {item}*/}
            {/*        </li>*/}
            {/*    })}*/}
            {/*</ul>*/}
            <br/>
            <br/>
            <button onClick={() => {
                console.log('i was here')
                setCurrentTab('all')
            }} className={currentTab=='all' ? 'p-0 rounded pl-3 pr-3 cursor-pointer text-white text-lg bg-blue-500' : 'p-0 rounded pl-3 pr-3 cursor-pointer text-white text-lg bg-gray-500'}>All</button>&nbsp;&nbsp;
            <button onClick={() => {
                console.log('i was here')
                setCurrentTab('active')
            }} className={currentTab=='active' ? 'p-0 rounded pl-3 pr-3 cursor-pointer text-white text-lg bg-blue-500' : 'p-0 rounded pl-3 pr-3 cursor-pointer text-white text-lg bg-gray-500'}>Active</button>&nbsp;&nbsp;
            <button onClick={() => {
                setCurrentTab('completed')
            }} className={currentTab=='completed' ? 'p-0 rounded pl-3 pr-3 cursor-pointer text-white text-lg bg-blue-500' : 'p-0 rounded pl-3 pr-3 cursor-pointer text-white text-lg bg-gray-500'}>Completed</button>



        </div>
    );
}

export default Todos;
