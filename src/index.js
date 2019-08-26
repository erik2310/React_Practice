import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Clock(props) {
    return (
        <div>
            <p>The time is {props.date.toLocaleTimeString()}.</p>
        </div>
    );
}

function App() {
    return (
        <div className="mt-3 ml-3">
            <h1>Hello World!</h1>
            <p className="mt-3">This is my first React app.</p>
            <Clock date={new Date()} />
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);