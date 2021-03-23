

import React, {useState, useEffect} from 'react'

import logo from './logo.svg';
import './App.css';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import About from "./about";
import Todos from "./todos";
import Contact from "./contact";

function Home() {

    const [users, setUsers] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const fetchUsers = async () => {
        console.log('this is going to fetch the users from the back end');
        let u = await fetch('http://localhost:3000/api/v1/users');
        let data = await u.json();
        console.log(data);
        setUsers(data);
        // 1. Perform a fetch call
        // 2. Once the fetch call is successful, update the state variable for the users
        // 3. Display the users
    };


    useEffect(() => {
        // console.log('this runs every time when the state variables change')
        console.log('this code only runs once on component mount')
        fetchUsers()
    }, [])

    const onFirstNameChange = async (ev) => {
        setFirstName(ev.currentTarget.value);
    };

    const onLastNameChange = async (ev) => {
        setLastName(ev.currentTarget.value);
    };

    const createUser = async () => {
        console.log('create a user with the firstname', firstName);
        console.log('create a user with the lastName', lastName);
        let u = await fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({firstName: firstName, lastName: lastName})
        });

        let res = await u.json();
        console.log(res);
        fetchUsers();
        setFirstName('')
        setLastName('')

    };

    const deleteUser = async (id) => {
        console.log('This should delete a particular user with the id', id);
        let u = await fetch(`http://localhost:3000/api/v1/users/${id}`, {method: 'DELETE'});
        let res = await u.json()
        console.log(res);
        fetchUsers();

    };

    return (
        <>

            <div className={'p-5'}>

                <input value={firstName} onChange={onFirstNameChange} type="firstName" className={'border'} placeholder={'First Name'}/>&nbsp;&nbsp;
                <input value={lastName} onChange={onLastNameChange} type="lastName" className={'border'} placeholder={'Last Name'}/>&nbsp;&nbsp;

                <button className={'border p-2 pr-4 pl-4 bg-gray-200'} onClick={createUser}>Create User</button>


                <br/>
                <br/>
                <h1 className={'text-xl font-bold'}>List of users in the app</h1>
                <hr/>

                <br/>
                {users && <ul>
                    {users.map((user, idx) => {
                        return <li key={user.id}>
                            {idx+1}. {user.firstName} {user.lastName}

                            {/*Google up function within a function reactjs*/}
                            &nbsp;&nbsp;&nbsp; <button className={'border p-1'} onClick={() => {
                                deleteUser(user.id)
                            }}>Delete</button>

                        </li>
                    })}
                </ul>}


                {/*<h2 className={'text-center'}>Welcome to my app</h2>*/}
            </div>

        </>
    );
}

function App() {

    // const [currentTab, setCurrentTab] = useState('/');

    let selectElement;

    const showSelect = async () => {
        console.log('i was here')
        // selectElement.click();
        document.getElementById('select-options').click()
        // trigger click event manually in javascript
    };

  return (
      <Router>
        <div>

            {/*optional: you could add this in the nav.js component*/}
          <ul className={'text-center bg-blue-500'}>

              <li className={'inline-block p-4 text-lg cursor-pointer uppercase tracking-widest pl-10 pr-10 text-white hidden sm:block md:hidden'}>

                  <i className={'fa fa-bars cursor-pointer'} onClick={showSelect}></i>

                  {/*<select name="" id="" className={'hidden'} ref={select => selectElement = select}>*/}
                  <select name="" id="select-options" className={'hidden'}>
                      <option value="home">Home</option>
                      <option value="about">About</option>
                  </select>
              </li>
              <li className={'inline-block p-4 text-lg cursor-pointer uppercase tracking-widest pl-10 pr-10 text-white'}>
                  <NavLink to="/about" activeClassName="text-blue-900 font-bold">About</NavLink>
              </li>
              <li className={'inline-block p-4 text-white text-lg cursor-pointer uppercase tracking-widest pl-10 pr-10 text-white'}>
                  <NavLink to="/todos" activeClassName="text-blue-900 font-bold">Todos</NavLink>
              </li>
              <li className={'inline-block p-4 text-white text-lg cursor-pointer uppercase tracking-widest pl-10 pr-10 text-white'}>
                  <NavLink to="/contact" activeClassName="text-blue-900 font-bold">Contact</NavLink>
              </li>
          </ul>


            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/todos">
                    <Todos />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </div>
      </Router>
  );
}

export default App;
