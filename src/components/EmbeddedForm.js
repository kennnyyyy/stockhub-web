import React from 'react';
import { init, Form } from '@feathery/react';

function EmbeddedForm() {
    // Initialize Feathery
    init('40a3e13c-87c4-4e38-bce0-630f97c35057');

    // Field-specific overrides
    const fieldOverrides = {
        'notes': {
            style: {
                resize: 'both',
                overflow: 'auto',
                border: '1px solid #ccc', // Optional: Add a border to visualize resizing
            },
        },
    };

    return <Form formId="HOuWgK" fieldOverrides={fieldOverrides} />;
}

export default EmbeddedForm;
