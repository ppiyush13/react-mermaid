import React, {Component} from 'react';
import Mermaid from './Mermaid';

export default class App extends Component {
    constructor(props) {
        super(props);
        
        window.callback = () => {
            alert('Node clicked');
        };

        this.state = {
            configs: {
                theme: 'forest',
            },
            graph: `
                graph LR;
                A-->REACT;
                click A callback "Tooltip for a callback";
                click REACT "http://www.github.com" "This is a tooltip for a link";
            `,
        };

        setTimeout(() => {
            console.log('update');
            this.setState({
                configs: {
                    theme: 'neutral',
                },
                graph: `
                    graph LR;
                    A-->REACT123;
                    click A callback "Tooltip for a callback";
                    click REACT123 "http://www.github.com" "This is a tooltip for a link";
                `,
            });
        }, 2000);
    }

    render() {
        const {configs, graph} = this.state;

        return <Mermaid id={"must_be_unique"} configs={configs}>
            {graph}
        </Mermaid>
    }
}
