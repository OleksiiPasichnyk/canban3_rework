import React from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import Canban from './Project files/Canban';
import * as uuidv4 from "uuidv4";

function App() {

    return (
        <div className="App">
            <Container key={uuidv4}>
                <Canban/>
            </Container>
        </div>

    );
}

export default App;

