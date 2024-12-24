// src/components/withHighlight.js
import React from 'react';
import New from './New';
import Popular from './Popular';

function withHighlight(Component) {
    return function Wrapper(props) {
        if (props.views > 1000) {
            return (
                <Popular>
                    <Component {...props} />
                </Popular>
            );
        } else if (props.views < 100) {
            return (
                <New>
                    <Component {...props} />
                </New>
            );
        } else {
            return <Component {...props} />;
        }
    };
}

export default withHighlight;