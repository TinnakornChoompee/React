import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Greet2 } from './components/Greet2';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Props from './components/Props';
import Props2 from './components/Props2';
import Props3 from './components/Props3';
import PropComponent from './components/PropsComponent';
import PropComponent2 from './components/PropsComponent2';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import NameListObj from './components/NameListObj';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyle.css';
import styles from './appStyle.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';

const nickname = '-------------- BelL --------------';

const user = {
  firstName : 'TinnakorN',
  lastName  : 'ChoompeE'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {formatName(user)} </p>
        <LifeCycleA/>
        <p> { nickname } </p>
        <Form/>
        <h1 className="error"> Error</h1>
        <h1 className={styles.success}> Error</h1>
        <Inline/>
        <StyleSheet success={true}/>
        <NameList/>
        <NameListObj/>
        <UserGreeting/>
        <ParentComponent/>
        <FunctionClick/>
        <ClassClick/>
        <EventBind></EventBind>
        <Greet/>
        <Greet2/>
        <Welcome/>
        <Hello/>
        <Props name="Prop Tinnakorn"> <p> This is Children</p> </Props>
        <PropComponent name="Props Component Bell"/>
        <PropComponent2 name="Props Component2 Bell"/>
        <Message/>
        <Counter/>
        <Props2 name="Tinnakorn" gender="m"/>
        <Props3 name="Tinnakorn" gender="m"/>
      </header>
    </div>
  );
}

export default App;
