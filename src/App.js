import React from 'react';
import Mermaid from './Mermaid';

function App() {
    window.callback = () => {
        alert('Node clicked');
    };

    return <Mermaid id={"must_be_unique"}>
        graph LR;
        A-->REACT;
        click A callback "Tooltip for a callback";
        click REACT "http://www.github.com" "This is a tooltip for a link";
    </Mermaid>
}

export default App;
