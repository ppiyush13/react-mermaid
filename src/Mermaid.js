import React, { Component, createRef } from 'react';
import {mermaidAPI} from 'mermaid';

export default class Mermaid extends Component {
    constructor(props) {
        super(props);
        this.elementRef = createRef();
        mermaidAPI.initialize({
            startOnLoad: true,
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'cardinal',
            },
            securityLevel: 'loose',
        });
    }

    componentDidMount() {
        const { children, id } = this.props;
        mermaidAPI.render(id, children, (content, bindEvents) => {
            const htmlElement = this.elementRef.current;
            htmlElement.innerHTML = content;
            bindEvents(htmlElement);
        });
    }

    render() {
        return <div ref={this.elementRef}></div>
    }
};
