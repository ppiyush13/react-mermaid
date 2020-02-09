import React, { useRef, useEffect } from 'react';
import {mermaidAPI} from 'mermaid';

export default ({children, id, configs}) => {
    const elementRef = useRef();

    useEffect(() => {
        mermaidAPI.initialize({
            ...configs,
            securityLevel: 'loose',
        });
    }, [configs]);

    useEffect(() => {
        mermaidAPI.render(id, children, (content, bindEvents) => {
            const htmlElement = elementRef.current;
            htmlElement.innerHTML = content;
            bindEvents(htmlElement);
        });
    }, [children, id, configs]);

    return <div ref={elementRef}>{children}</div>
};
