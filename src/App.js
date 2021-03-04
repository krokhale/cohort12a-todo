import React, {useState} from 'react'

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
    return <h2 className={'text-center'}>Welcome to my app</h2>;
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
