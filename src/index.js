import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>This is my first React app.</p>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);