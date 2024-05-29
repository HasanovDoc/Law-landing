import './App.css';
import { Employees } from './components/Employees';
import { Header } from './components/Header';
import { Main } from './components/Main';
import styled from 'styled-components';

function App() {
    return ( 
        <div className="App">
            <Header/>
            <Main />
            <Employees/>
            <Next></Next>
        </div>
    );
}

export default App;

const Next = styled.div`
    background-color: blue;
    width: 100%;
    height: 5000vh;
`