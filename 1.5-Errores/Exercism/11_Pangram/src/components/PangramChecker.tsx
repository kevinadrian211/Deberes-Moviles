import React from 'react';

export const PangramChecker: React.FC<{ paragraph: string }> = ({ paragraph }) => {
    const isPangram = (paragraph: string): boolean => {
        return new Set(paragraph.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
    };

    return (
        <div>
            <p>{paragraph}</p>
            <p>{isPangram(paragraph) ? 'Es un pangrama' : 'No es un pangrama'}</p>
        </div>
    );
};
