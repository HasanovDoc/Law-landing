import './App.css';
import { Contacts } from './components/Contacts';
import { Employees } from './components/Employees';
import { Header } from './components/Header';
import { Main } from './components/Main';
import styled from 'styled-components';
import { Services } from './components/Services';

function App() {
    return ( 
        <div className="App">
            <Main/>
            <Header />
            <Services />
            <Employees />
            <Contacts id="Contacts"/>
        </div>
    );
}

export default App;

